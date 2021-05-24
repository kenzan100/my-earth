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

    @events = [
      Event.new(:study, :cs_book, [vec1, vec2]),
      Event.new(:study, :cs_book, [vec1, vec2])
    ]
  end

  it "simulates the single game play" do
    money_space = Space.new(:money)
    purchase_vec = Force.new(money_space, :negative, 10)
    ev1 = Event.new(:purchase, :cs_book, [purchase_vec])
    ev2 = Event.new(:purchase, :cookie,  [purchase_vec])

    _(Aggregates::Inventory.new([ev1, ev2]).to_s).must_equal(
      "CS Book * 1 | permanent\nCookie * 10 | consumable"
    )

    ev3 = Event.new(:schedule, :cs_book, [], { from: '', till: ''})
    ev4 = Event.new(:schedule, :cookie,  [], { from: '', till: ''})

    ev5 = Events::GameTime.new(:tick, :game_time, [])

    _(Aggregates::Status.new([ev3, ev4, ev5]).to_h).must_equal(
      {
        :energy=>80,
        :money=>90,
        :goods=>{:cs_book=>1},
        :skills=>{:cs_skill=>20}
      }
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

    result = Main.new(base, @events).resolve
    _(result.triggered_conditions).must_equal(
      [:game_ends, :game_ends]
    )
  end

  it "calculates the attributes given events" do
    base = {
      @s1 => 0,
      @s2 => 10
    }

    result = Main.new(base, @events).resolve

    _(result.attributes).must_equal(
      {
        @s1 => 20,
        @s2 => 0,
      }
    )
  end
end