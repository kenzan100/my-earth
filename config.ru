require 'json'

require 'zeitwerk'
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/lib")
loader.push_dir("#{__dir__}/web")
loader.enable_reloading
loader.setup

module World
  MONEY_SPACE = Constructs::Space.new(:money)
  PURCHASE_VEC = Constructs::Vector.new(MONEY_SPACE, -10)

  ENERGY_SPACE = Constructs::Space.new(:energy)
  EAT_VEC = Constructs::Vector.new(ENERGY_SPACE, 10)

  COOKIE_SPACE = Constructs::Space.new(:cookie)
  CONSUME_VEC = Constructs::Vector.new(COOKIE_SPACE, -1)
  PURCHASE_COOKIE_VEC = Constructs::Vector.new(COOKIE_SPACE, 1)

  COOKIE_SPACE.add_violation(
    ->(val) { val < 0 },
    :cookie_cannot_be_below_zero
  )

  MONEY_SPACE.add_violation(
    ->(val) { val < 0 },
    :money_cannot_go_below_zero
  )

  COOKIE = Static::Item.new(:cookie, :consumable)
  COOKIE.add_possible_action(:purchase, [PURCHASE_VEC, PURCHASE_COOKIE_VEC])
  COOKIE.add_possible_action(:eat, [EAT_VEC, CONSUME_VEC])

  ITEMS = {
    cookie: COOKIE
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