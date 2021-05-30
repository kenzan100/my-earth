module Aggregates
  class Schedule
    def initialize(events)
      @events = events
    end

    Result = Struct.new(:current_schedule) do
      def to_s
        current_schedule.map do |schedule|
          vectors = schedule.target.search(schedule.scheduled_action)
          duration = schedule.scheduled_duration

          "#{duration.first.to_s.rjust(2)} - #{duration.last.to_s.rjust(2)} " +
            "| #{schedule.scheduled_action} #{schedule.target.name} " +
            "(#{vectors.map(&:to_s).join(', ')})"
        end.join("\n")
      end
    end

    def call
      schedules = []
      relevant_events.each do |ev|
        schedules.reject! do |past_schedule|
          past_schedule.overlaps?(ev)
        end

        schedules << ev
      end
      Result.new(schedules)
    end

    def at(game_time)
      relevant_events.select do |ev|
        ev.registered_at <= game_time.registered_at
      end
    end

    private

    def relevant_events
      @events.select { |ev| ev.action == :schedule }.sort_by(&:registered_at)
    end
  end
end