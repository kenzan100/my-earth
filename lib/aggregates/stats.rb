require 'byebug'

module Aggregates
  class Stats
    def initialize(base, events, speed_change_events)
      @base = { money: 100 } # process all the events for now
      @events = events
      @speed_change_events = speed_change_events
    end

    Result = Struct.new(:attributes, :violations, :produced_events, :tick_events, :logs, :current_schedule) do
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

      (@events + produced_events).sort_by(&:registered_at).each do |event|
        process_event(event, result_attrs, triggered)
      end

      pp "#{tick_events.length} hours passed.."

      Result.new(
        result_attrs,
        triggered + progress_result.violations,
        produced_events,
        tick_events
      )
    end

    def all_events(since: Game::START_TIME - 1)
      result = call

      base = (@events + result.produced_events + result.tick_events).sort_by(&:registered_at)
      logs = base.select { |ev| ev.registered_at.to_i > since.to_i }.map do |e|
        {
          action: e.action,
          target: e.target.name,
          violations: e.violations,
          game_time: e.game_time&.iso8601,
          registered_at: e.registered_at.iso8601
        }
      end

      result.current_schedule = Aggregates::Schedule.new(@events).call
      result.logs = logs
      result
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
        event.violations = violations
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
