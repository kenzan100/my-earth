require 'byebug'

module Aggregates
  class Stats
    def initialize(base, events, speed_change_events)
      @base = { money: 100 } # process all the events for now
      @events = events
      @speed_change_events = speed_change_events
    end

    Result = Struct.new(:attributes, :violations) do
      def to_h
        {
          stats: attributes.transform_values { |v| v.to_s },
          violations: violations.uniq
        }
      end
    end

    def call
      tick_events = TickGenerator.new(events: @speed_change_events).call

      progress_result = Aggregates::TimeProgress.new(tick_events + @events).call
      produced_events = progress_result.events

      result_attrs = {}
      result_attrs.merge!(@base)

      triggered = []

      pp (@events + produced_events + tick_events).sort_by(&:registered_at).map { |e| [ e.action, e.target.name, e.registered_at.to_s ] }

      (@events + produced_events).sort_by(&:registered_at).each do |event|
        process_event(event, result_attrs, triggered)
      end

      pp "#{tick_events.length} hours passed.."
      pp triggered + progress_result.violations

      Result.new(
        result_attrs,
        triggered + progress_result.violations
      )
    end

    private

    def process_event(event, result_attrs, triggered)
      violations = event.forces.flat_map do |vector|
        current_val = result_attrs[vector.space.name] || 0

        vector.space.conditions.map do |condition|
          if condition.rule.call(current_val + vector.magnitude)
            condition.event_name
          end
        end
      end.compact

      if violations.any?
        triggered.concat violations
        return
      end

      event.forces.each do |event_force|
        # NOTE: better to be limit the scope of default write
        unless result_attrs[event_force.space.name]
          result_attrs[event_force.space.name] = 0
        end

        result_attrs[event_force.space.name] += event_force.magnitude
      end
    end
  end
end
