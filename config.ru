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

  MONEY_SPACE.add_violation(
    ->(val) { val < 0 },
    :money_cannot_go_below_zero
  )

  COOKIE = Static::Item.new(:cookie, :consumable)
  COOKIE.add_possible_action(:purchase, [PURCHASE_VEC])
  COOKIE.add_possible_action(:eat, [EAT_VEC])

  ITEMS = {
    cookie: COOKIE
  }
end

module Game
  EVENTS = []
  STATS = { World::MONEY_SPACE.name => 25 }
  TICKER = Ticker.new
  TICKER.change_speed(1000) # 1 hour game time elapses 1000x faster than real time
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
          Aggregates::Stats.new(Game::STATS, Game::EVENTS).call.to_h.to_json
        ]
      ]
    end
  end
end

run app