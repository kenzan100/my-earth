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
  JOB_SPACE = Constructs::Space.new(:software_engineer)
  CS_SKILL_SPACE = Constructs::Space.new(:cs_skill)

  PURCHASE_VEC = Constructs::Vector.new(MONEY_SPACE, -10)
  EAT_VEC = Constructs::Vector.new(ENERGY_SPACE, 10)
  CONSUME_VEC = Constructs::Vector.new(COOKIE_SPACE, -1)
  PURCHASE_COOKIE_VEC = Constructs::Vector.new(COOKIE_SPACE, 1)

  JOB_SPACE.add_violation(
    ->(val) { val != Float::INFINITY },
    :i_am_not_hired_as_software_engineer_yet
  )
  COOKIE_SPACE.add_violation(
    ->(val) { val < 0 },
    :cookie_cannot_be_below_zero
  )
  ENERGY_SPACE.add_violation(
    ->(val) { val < 0 },
    :i_am_too_tired
  )
  MONEY_SPACE.add_violation(
    ->(val) { val < 0 },
    :money_cannot_go_below_zero
  )

  COOKIE = Static::Item.new(:cookie, :consumable)
  COOKIE.add_possible_action(:purchase, [PURCHASE_VEC, PURCHASE_COOKIE_VEC])
  COOKIE.add_possible_action(:eat, [EAT_VEC, CONSUME_VEC])

  SOFTWARE_ENGINEER = Static::Job.new(
    :software_engineer,
    30,
    { CS_SKILL_SPACE => 10 },
    { CS_SKILL_SPACE => 3 },
    { ENERGY_SPACE => -20 }
  )
  SOFTWARE_ENGINEER.add_possible_action(
    :hired,
    [Constructs::Vector.new(JOB_SPACE, Float::INFINITY)]
  )

  ITEMS = {
    cookie: COOKIE
  }

  JOBS = {
    software_engineer: SOFTWARE_ENGINEER
  }
end

module Game
  EVENTS = []
  SPEED_CHANGE_EVENTS = []
  STATS = { World::MONEY_SPACE.name => 25 }
  START_TIME = Time.now
  LAST_STATS_PROCESSED_AT = { val: START_TIME }
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

  map "/purchase" do
    loader.reload
    run PurchaseHandler.new(Game::EVENTS)
  end

  map "/schedule" do
    loader.reload
    run ScheduleHandler.new(Game::EVENTS)
  end

  map "/list" do
    loader.reload
    run ListHandler.new(Game::EVENTS)
  end

  map "/apply" do
    loader.reload
    run ApplyHandler.new(Game::EVENTS)
  end

  map "/logs" do
    loader.reload
    run LogHandler.new(Game::EVENTS)
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