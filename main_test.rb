require "minitest/autorun"
require "pp"

require "zeitwerk"
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/lib")
loader.setup

describe 'Game CLI mode - end to end' do
  before do
    @s1 = Constructs::Space.new(:cs_skill)
    @s2 = Constructs::Space.new(:energy)

    vec1 = Constructs::Vector.new(@s1, :positive, 10)
    vec2 = Constructs::Vector.new(@s2, :negative, 5)

    @cs_book = Static::Item.new(:cs_book, :permanent)
    @cookie  = Static::Item.new(:cookie, :consumable)

    @cs_book.add_possible_action(:study, [vec1, vec2])
    @cookie.add_possible_action(:eat, [Constructs::Vector.new(@s2, :positive, 14)])

    @events = [
      Events::Event.new(:study, @cs_book, [vec1, vec2]),
      Events::Event.new(:study, @cs_book, [vec1, vec2])
    ]
  end

  it "simulates the single game play" do
    money_space = Constructs::Space.new(:money)
    purchase_vec = Constructs::Vector.new(money_space, :negative, 10)

    ev1 = Events::Event.new(:purchase, @cs_book, [purchase_vec])
    ev2 = Events::Event.new(:purchase, @cookie,  [purchase_vec])

    _(Aggregates::Inventory.new([ev1, ev2]).to_s).must_equal(
      "cs_book * 1 | permanent\ncookie * 1 | consumable"
    )

    ev3 = Events::Event.new(:schedule, @cs_book, [], { as: :study, from: '', till: ''})
    ev4 = Events::Event.new(:schedule, @cookie,  [], { as: :eat,   from: '', till: ''})

    ev5 = Events::GameTime.new(:tick, :game_time, [])
    ev6 = Events::GameTime.new(:tick, :game_time, [])

    produced_events = Aggregates::TimeProgress.new([ev3, ev4, ev5, ev6]).call

    _(produced_events.group_by(&:action)[:study].first.target).must_equal @cs_book
    _(produced_events.group_by(&:action)[:eat].first.target).must_equal @cookie

    result = Aggregates::Stats.new({}, produced_events).call

    _(result.to_h).must_equal({ cs_skill: 10, energy: 9 })

    _(result.side_effects.first.action).must_equal :consume
    _(result.side_effects.first.target).must_equal @cookie

    _(Aggregates::Inventory.new([ev1, ev2] + result.side_effects).to_s).must_equal(
      "cs_book * 1 | permanent\ncookie * 0 | consumable"
    )

    @software_engineer = Static::Job.new(:software_engineer, 30)
    job_apply = Events::Event.new(:apply, @software_engineer, [])


    # apply for a job
    # assert that it can succeed with the combination of luck and skills
    #
    # schedule a job
    # wait in game time
    # assert money and energy and skills change accordingly
  end

  it "terminates if terminating space attr goes zero" do
    @s2.add_condition(->(v) { v < 0 }, :game_ends)
    base = {
      @s2 => 0
    }

    result = Aggregates::Stats.new(base, @events).call
    _(result.triggered_conditions).must_equal(
      [:game_ends, :game_ends]
    )
  end

  it "calculates the attributes given events" do
    base = {
      @s1 => 0,
      @s2 => 10
    }

    result = Aggregates::Stats.new(base, @events).call

    _(result.attributes).must_equal(
      {
        @s1 => 20,
        @s2 => 0,
      }
    )
  end
end