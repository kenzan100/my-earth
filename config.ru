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

  MONEY_SPACE.add_violation(
    ->(val) { val < 0 },
    :money_cannot_go_below_zero
  )

  COOKIE = Static::Item.new(:cookie, :consumable)
  COOKIE.add_possible_action(:purchase, [PURCHASE_VEC])

  ITEMS = {
    cookie: COOKIE
  }
end

module Game
  EVENTS = []
  STATS = { World::MONEY_SPACE => 25 }
end

module Constants
  JSON_TYPE =  { 'Content-Type' => 'application/json' }
end

app = Rack::Builder.new do
  use Rack::ShowExceptions

  map "/purchase" do
    loader.reload
    run PurchaseHandler.new(Game::EVENTS)
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