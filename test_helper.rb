module TestHelper
  def setup
    s1 = Constructs::Space.new(:cs_skill)
    s2 = Constructs::Space.new(:energy)

    s2.add_violation(->(v) { v < 0 }, :game_ends)

    vec1 = Constructs::Vector.new(s1, 10)
    vec2 = Constructs::Vector.new(s2, -5)

    cs_book = Static::Item.new(:cs_book, :permanent)
    cookie  = Static::Item.new(:cookie, :consumable)

    cs_book.add_possible_action(:study, [vec1, vec2])
    cookie.add_possible_action(:eat, [Constructs::Vector.new(s2, 14)])

    events = [
      Events::Event.new(:study, cs_book, [vec1, vec2]),
      Events::Event.new(:study, cs_book, [vec1, vec2])
    ]

    {
      cs_book: cs_book,
      cookie: cookie,
      events: events
    }
  end

  module_function :setup
end