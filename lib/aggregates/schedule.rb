module Aggregates
  class Schedule
    def initialize(events)
      @events = events
    end

    Result = Struct.new(:current_schedule) do
      def to_s
        current_schedule.map do |schedule|
          vectors = schedule.target.search(schedule.scheduled_action) || []
          duration = schedule.scheduled_duration

          "#{duration.first.to_s.rjust(2)} - #{duration.last.to_s.rjust(2)} " +
            "| #{schedule.scheduled_action} #{schedule.target.name} " +
            "(#{vectors.map(&:to_s).join(', ')})"
        end.join("\n")
      end
    end

    # TODO schedule prob. can only be a vector space on its own
    # so that validations/side effects can be expressed uniformly
    def call
      schedules = reject_overlaps(relevant_events)
      Result.new(schedules)
    end

    def at(game_time)
      events = relevant_events.select do |ev|
        ev.registered_at <= game_time.registered_at
      end
      reject_overlaps(events)
    end

    private

    def reject_overlaps(events)
      schedules = []
      events.each do |ev|
        schedules.reject! do |past_schedule|
          past_schedule.overlaps?(ev)
        end

        schedules << ev
      end
      schedules
    end

    def relevant_events
      @events.select { |ev| ev.action == :schedule }.sort_by(&:registered_at)
    end
  end
end