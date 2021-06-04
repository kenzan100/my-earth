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

      events_to_process = (@events + produced_events).sort_by(&:registered_at)
      events_to_process.each do |event|
        process_event(event, result_attrs)
      end

      pp "#{tick_events.length} days passed.."
      latest_violation = events_to_process.last&.violations || []

      Result.new(
        result_attrs,
        latest_violation + progress_result.violations,
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
          registered_at: e.registered_at.iso8601,
          end_state: e.end_state,
          game_start: Game::START_TIME.iso8601,
          elapsed: (e.registered_at - Game::START_TIME).floor
        }
      end

      result.current_schedule = Aggregates::Schedule.new(@events).call
      result.logs = logs
      result
    end

    private

    def process_event(event, result_attrs)
      violations = event.forces.flat_map do |vector|
        current_val = result_attrs[vector.space.name] || 0

        vector.space.conditions.map do |condition|
          if condition.rule.call(current_val + vector.magnitude)
            condition.human_readable
          end
        end
      end.compact

      event_violations = event.rules.map do |rule|
        event_force = event.forces.find { |v| v.space.name == rule.space.name }
        current_val = result_attrs[rule.space.name] || 0
        if rule.rule.call(current_val + (event_force&.magnitude || 0))
          rule.rule_description
        end
      end.compact

      violations.concat event_violations

      if violations.any?
        event.violations = violations
        return
      end

      event.forces.each do |event_force|
        # NOTE: better to be limit the scope of default write
        unless result_attrs[event_force.space.name]
          result_attrs[event_force.space.name] = 0
        end

        result_attrs[event_force.space.name] += event_force.magnitude

        event_force.space.end_states.each do |end_state_condition|
          if end_state_condition.rule.call(result_attrs[event_force.space.name])
            # overrides to the last one
            event.end_state = end_state_condition.event_name
          end
        end
      end
    end
  end
end
