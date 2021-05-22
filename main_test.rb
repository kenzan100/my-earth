require "minitest/autorun"
require_relative 'main'

describe Main do
  before do
    @s1 = Space.new(:cs_skill)
    @s2 = Space.new(:energy)

    vec1 = Force.new(@s1, :positive, 10)
    vec2 = Force.new(@s2, :negative, 5)

    @events = [
      Event.new(:study_cs_app_book, [vec1, vec2]),
      Event.new(:study_cs_app_book, [vec1, vec2])
    ]
  end

  it "simulates the single game play" do
    # start with initial energy and money
    # buy book
    # buy cookie
    #
    # schedule book and cookie
    # wait in game time
    # assert that energy and skills change accordingly
    #
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