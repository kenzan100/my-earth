require 'time'

class LogHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    req = Rack::Request.new(env)

    stats = Aggregates::Stats.new({}, Game::EVENTS, Game::SPEED_CHANGE_EVENTS)

    since = req.params['since']
    res = begin
            time = Time.parse(since)
            stats.all_events(since: time)
          rescue => e
            puts "Time.parse ERROR" + e.message
            stats.all_events
          end
    [
      200,
      Constants::JSON_TYPE,
      [
        {
          events: res.logs,
          stats: res.attributes.transform_values(&:to_s),
          schedule: res.current_schedule.to_a
        }.to_json
      ]
    ]
  end
end