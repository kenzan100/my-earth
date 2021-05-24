module Aggregates
  class Schedule
    def initialize(events)
      @events = events
    end

    def at(game_time)
      @events.select do |ev|
        ev.action == :schedule &&
          ev.registered_at <= game_time.registered_at
      end.sort_by(&:registered_at)
    end
  end
end