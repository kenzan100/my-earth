module Aggregates
  class Schedule
    def initialize(events)
      @events = events
    end

    Result = Struct.new(:current_schedule) do
      def to_s
        to_a.join("\n")
      end

      def to_a
        current_schedule.map do |schedule|
          details = schedule.target.search(schedule.scheduled_action)
          duration = schedule.scheduled_duration

          details_msg = if details
                          details.vectors.map do |vec|
                            vec.to_s(duration: schedule.scheduled_duration.size)
                          end.join(', ')
                        else
                          "Unknown action"
                        end

          "#{duration.first.to_s.rjust(2)} - #{duration.last.to_s.rjust(2)} " +
            "| #{schedule.scheduled_action} #{schedule.target.name} " +
            "(#{details_msg})"
        end
      end
    end

    # TODO schedule prob. can only be a vector space on its own
    # so that validations/side effects can be expressed uniformly
    def call
      schedules = reject_overlaps(relevant_events)
      Result.new(schedules.sort_by { |s| s.scheduled_duration.first })
    end

    def at(game_time)
      events = relevant_events.select do |ev|
        ev.registered_at <= game_time.registered_at
      end
      reject_overlaps(events).sort_by { |s| s.scheduled_duration.first }
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