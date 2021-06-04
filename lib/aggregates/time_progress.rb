module Aggregates
  class TimeProgress
    def initialize(events)
      @events = events
    end

    Result = Struct.new(:events, :violations)

    def call
      ticks = @events.select { |ev| ev.action == :tick }
      schedules = @events.select { |ev| ev.action == :schedule }

      produced_events = []
      violations = []
      ticks.sort_by(&:registered_at).each.with_index do |t, i|
        next if i == ticks.length - 1

        schedules_at_t = Aggregates::Schedule.new(schedules).at(t)
        schedules_at_t.each.with_index do |schedule_event, i|
          item_or_job = schedule_event.target
          details = item_or_job.search(schedule_event.scheduled_action)

          unless details&.vectors
            msg = "#{item_or_job.name} does not know how to #{schedule_event.scheduled_action}"
            violations << msg
            next
          end

          produced_events << Events::Event.new(
            schedule_event.scheduled_action,
            item_or_job,
            details.vectors,
            {
              duration: schedule_event.scheduled_duration.size, # hours
              when: t.registered_at + i + 1
            },
            rules: details.rules || []
          )
        end
      end

      Result.new(
        produced_events,
        violations
      )
    end
  end
end