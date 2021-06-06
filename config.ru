require 'json'
require 'rack/cors'
require 'byebug'

require 'zeitwerk'
loader = Zeitwerk::Loader.new
loader.push_dir("#{__dir__}/lib")
loader.push_dir("#{__dir__}/web")
loader.setup

# TODO Development only setup
use Rack::Cors do
  allow do
    origins '*'
    resource '*', headers: :any, methods: [:get, :post, :patch, :put]
  end
end

GAMES = {
  1 => Game.new
}

class GameChoice
  def initialize(app)
    @app = app
  end

  def call(env)
    game = GAMES[env["HTTP_MY_JOB_GAME_ID"].to_i]

    unless game
      return [
        404,
        Constants::TEXT_TYPE,
        [ "game not found" ]
      ]
    end

    env['GAME'] = game
    @app.call(env)
  end
end

app = Rack::Builder.new do
  use Rack::ShowExceptions
  use GameChoice

  map "/action" do
    run OneOffActionHandler
  end

  map "/schedule" do
    run ScheduleHandler.new []
  end

  map "/list" do
    run ListHandler.new []
  end

  map "/logs" do
    run LogHandler
  end

  map "/change_speed" do
    run ChangeSpeedHandler.new []
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