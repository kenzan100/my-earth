require "minitest/autorun"

require "zeitwerk"
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/lib")
loader.setup

describe Main do
  before do
    @s1 = Space.new(:cs_skill)
    @s2 = Space.new(:energy)

    vec1 = Force.new(@s1, :positive, 10)
    vec2 = Force.new(@s2, :negative, 5)

    @cs_book = Item.new(:cs_book, :permanent)
    @cookie  = Item.new(:cookie, :consumable)

    @cs_book.add_possible_action(:study, [vec1, vec2])
    @cookie.add_possible_action(:eat, [Force.new(@s2, :positive, 14)])

    @events = [
      Events::Event.new(:study, @cs_book, [vec1, vec2]),
      Events::Event.new(:study, @cs_book, [vec1, vec2])
    ]
  end

  it "simulates the single game play" do
    money_space = Space.new(:money)
    purchase_vec = Force.new(money_space, :negative, 10)
    ev1 = Events::Event.new(:purchase, @cs_book, [purchase_vec])
    ev2 = Events::Event.new(:purchase, @cookie,  [purchase_vec])

    _(Aggregates::Inventory.new([ev1, ev2]).to_s).must_equal(
      "cs_book * 1 | permanent\ncookie * 1 | consumable"
    )

    ev3 = Events::Event.new(:schedule, @cs_book, [], { as: :study, from: '', till: ''})
    ev4 = Events::Event.new(:schedule, @cookie,  [], { as: :eat,   from: '', till: ''})

    ev5 = Events::GameTime.new(:tick, :game_time, [])
    ev6 = Events::GameTime.new(:tick, :game_time, [])

    _(Aggregates::VectorStatus.new([ev3, ev4, ev5, ev6]).to_h).must_equal(
      {
        :cs_skill => 10,
        :energy   => 9,
      }
    )

    produced_events = Aggregates::VectorStatus.new([ev3, ev4, ev5, ev6]).call
    result = Main.new({}, produced_events).call
    _(Aggregates::Inventory.new([ev1, ev2] + result.side_effects).to_s).must_equal(
      "cs_book * 1 | permanent\ncookie * 0 | consumable"
    )

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

    result = Main.new(base, @events).call
    _(result.triggered_conditions).must_equal(
      [:game_ends, :game_ends]
    )
  end

  it "calculates the attributes given events" do
    base = {
      @s1 => 0,
      @s2 => 10
    }

    result = Main.new(base, @events).call

    _(result.attributes).must_equal(
      {
        @s1 => 20,
        @s2 => 0,
      }
    )
  end
end