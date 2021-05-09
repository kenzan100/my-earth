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

  it "calculates the attributes given events" do
    base = {
      @s1 => 0,
      @s2 => 10
    }

    result = Main.new(base, @events).resolve

    _(result).must_equal(
      {
        @s1 => 20,
        @s2 => 0,
      }
    )
  end
end