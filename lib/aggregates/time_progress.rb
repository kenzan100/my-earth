module Aggregates
  class TimeProgress
    def initialize(events)
      @events = events
    end

    def call
      ticks = @events.select { |ev| ev.action == :tick }
      schedules = @events.select { |ev| ev.action == :schedule }

      produced_events = []
      ticks.sort_by(&:registered_at).each.with_index do |t, i|
        next if i == ticks.length - 1

        schedules_at_t = Aggregates::Schedule.new(schedules).at(t)
        schedules_at_t.each do |schedule_event|
          item_or_job = schedule_event.target
          vectors = item_or_job.search(schedule_event.scheduled_action)
          produced_events << Events::Event.new(
            schedule_event.scheduled_action,
            item_or_job,
            vectors,
            { when: t.registered_at + 1 }
          )
        end
      end

      produced_events
    end
  end
end