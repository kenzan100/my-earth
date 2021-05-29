require 'json'

require 'zeitwerk'
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/lib")
loader.setup

EVENTS = []

COOKIE  = Static::Item.new(:cookie, :consumable)
MONEY_SPACE = Constructs::Space.new(:money)
PURCHASE_VEC = Constructs::Vector.new(MONEY_SPACE, 10)

JSON_TYPE =  { 'Content-Type' => 'application/json' }

class PurchaseHandler
  def call(env)
    event = Events::Event.new(
      :purchase,
      COOKIE,
      [PURCHASE_VEC]
    )
    EVENTS << event

    body = Aggregates::Inventory.new(EVENTS).to_s

    [
      200,
      JSON_TYPE,
      [ { inventory: body }.to_json ]
    ]
  end
end

app = Rack::Builder.new do
  use Rack::ShowExceptions

  map "/purchase" do
    run PurchaseHandler.new
  end
end

run app