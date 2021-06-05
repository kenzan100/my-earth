require 'json'
require 'rack/cors'

require 'zeitwerk'
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/lib")
loader.push_dir("#{__dir__}/web")
loader.enable_reloading
loader.setup

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