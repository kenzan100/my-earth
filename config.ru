require 'securerandom'
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

use Rack::Static, {
  urls: {
    "/" => 'main.html',
    "/src/out.js" => 'src/out.js'
  },
  root: 'clients'
}

GAMES = {}

class GameChoice
  def initialize(app)
    @app = app
  end

  def call(env)
    if %w[/init /list /].include? env['REQUEST_PATH']
      return @app.call(env)
    end

    game = GAMES[env["HTTP_MY_JOB_GAME_ID"]]

    unless game
      return [
        404,
        Constants::TEXT_TYPE,
        [
          { error: "game not found. set HTTP_MY_JOB_GAME_ID to request header." +
            "if not started yet, send init." }.to_json
        ]
      ]
    end

    env['GAME'] = game
    @app.call(env)
  end
end

app = Rack::Builder.new do
  use Rack::ShowExceptions
  use GameChoice

  map "/init" do
    run ->(env) do
      begin
        game_id = SecureRandom.hex(2)
      end while GAMES[game_id]

      GAMES[game_id] = Game.new
      [
        200,
        Constants::TEXT_TYPE,
        [ "Game started with game_id: #{game_id}" ]
      ]
    end
  end

  map "/action" do
    run OneOffActionHandler
  end

  map "/schedule" do
    run ScheduleHandler
  end

  map "/list" do
    run ListHandler
  end

  map "/logs" do
    run LogHandler
  end

  map "/change_speed" do
    run ChangeSpeedHandler
  end

  map "/stats" do
    run ->(env) do
      [
        200,
        Constants::JSON_TYPE,
        [
          Aggregates::Stats.new(env['GAME']).call.to_h.to_json
        ]
      ]
    end
  end

end

run app