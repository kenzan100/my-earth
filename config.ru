require 'json'
require 'rack/cors'

require 'zeitwerk'
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/lib")
loader.push_dir("#{__dir__}/web")
loader.enable_reloading
loader.setup

module World
  MONEY_SPACE = Constructs::Space.new(:money)
  ENERGY_SPACE = Constructs::Space.new(:energy)
  COOKIE_SPACE = Constructs::Space.new(:cookie)
  CS_SKILL_SPACE = Constructs::Space.new(:cs_skill)
  CS_BOOK_SPACE = Constructs::Space.new(:cs_book)
  COMMUNICATION_SPACE = Constructs::Space.new(:communication_skill)
  NO_OP_SPACE = Constructs::Space.new(:no_op)

  PURCHASE_VEC = Constructs::Vector.new(MONEY_SPACE, -10)
  EAT_VEC = Constructs::Vector.new(ENERGY_SPACE, 10)
  CONSUME_VEC = Constructs::Vector.new(COOKIE_SPACE, -1)
  PURCHASE_COOKIE_VEC = Constructs::Vector.new(COOKIE_SPACE, 1)

  COOKIE_SPACE.add_violation(
    ->(val) { val < 0 },
    :cookie_cannot_be_below_zero,
    "I can't consume what I don't have."
  )
  ENERGY_SPACE.add_violation(
    ->(val) { val < 0 },
    :i_am_too_tired,
    "I need more energy."
  )
  MONEY_SPACE.add_violation(
    ->(val) { val < 0 },
    :money_cannot_go_below_zero,
    "I don't have enough money."
  )

  MONEY_SPACE.add_end_state(
    ->(val) { val > 1000 },
    :money_achieved
  )

  COOKIE = Static::Allocatable.new(:cookie, :item)
  COOKIE.add_possible_action(:purchase, [PURCHASE_VEC, PURCHASE_COOKIE_VEC], [])
  COOKIE.add_possible_action(:eat, [EAT_VEC, CONSUME_VEC], [])

  CS_BOOK = Static::Allocatable.new(:cs_book, :item)
  CS_BOOK.add_possible_action(
    :purchase,
    [
      Constructs::Vector.new(MONEY_SPACE, -200),
      Constructs::Vector.new(CS_BOOK_SPACE, 1)
    ],
    []
  )
  CS_BOOK.add_possible_action(
    :study,
    [
      Constructs::Vector.new(CS_SKILL_SPACE, 1),
      Constructs::Vector.new(ENERGY_SPACE, -30)
    ],
    []
  )

  SOFTWARE_ENGINEER = Static::Allocatable.new(:software_engineer, :job)
  SOFTWARE_ENGINEER.add_possible_action(
    :work,
    [
      Constructs::Vector.new(ENERGY_SPACE, -20),
      Constructs::Vector.new(CS_SKILL_SPACE, 3),
      Constructs::Vector.new(MONEY_SPACE, 30)
    ],
    [
      Constructs::Violation.new(
        CS_SKILL_SPACE,
        ->(v) { v < 10 },
        :my_cs_skill_is_too_low,
        "cs_skill needs to be above 10"
      )
    ]
  )
  MCDONALD_PART_TIME = Static::Allocatable.new(:mcdonald_part_time, :job)
  MCDONALD_PART_TIME.add_possible_action(
    :work,
    [
      Constructs::Vector.new(ENERGY_SPACE, -10),
      Constructs::Vector.new(COMMUNICATION_SPACE, 1),
      Constructs::Vector.new(MONEY_SPACE, 12)
    ],
    [
      Constructs::Violation.new(
        NO_OP_SPACE,
        ->(v) { rand > 1 },
        :do_not_feel_like_it,
        "30% chance of not working successfully"
      )
    ]
  )

  ITEMS = {
    cookie: COOKIE,
    cs_book: CS_BOOK,
  }

  JOBS = {
    software_engineer: SOFTWARE_ENGINEER,
    mcdonald_part_time: MCDONALD_PART_TIME
  }
end

module Game
  EVENTS = []
  SPEED_CHANGE_EVENTS = []
  STATS = { }
  START_TIME = Time.now
  INITIAL_SPEED = 20_000 # how fast you want a day to pass (multiplier)
  LAST_STATS_PROCESSED_AT = { val: START_TIME }
  DAY_IN_SECONDS = 86400
end

module Constants
  JSON_TYPE = { 'Content-Type' => 'application/json' }
  TEXT_TYPE = { 'Content-Type' => 'text/plan' }
end

# TODO Development only setup
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :patch, :put]
  end
end

app = Rack::Builder.new do
  use Rack::ShowExceptions

  map "/action" do
    loader.reload
    run OneOffActionHandler.new(Game::EVENTS)
  end

  map "/schedule" do
    loader.reload
    run ScheduleHandler.new(Game::EVENTS)
  end

  map "/list" do
    loader.reload
    run ListHandler.new(Game::EVENTS)
  end

  map "/logs" do
    loader.reload
    run LogHandler.new(Game::EVENTS)
  end

  map "/change_speed" do
    loader.reload
    run ChangeSpeedHandler.new(Game::EVENTS)
  end

  map "/stats" do
    run ->(env) do
      [
        200,
        Constants::JSON_TYPE,
        [
          Aggregates::Stats.new(
            Game::STATS, Game::EVENTS, Game::SPEED_CHANGE_EVENTS
          ).call.to_h.to_json
        ]
      ]
    end
  end
end

run app