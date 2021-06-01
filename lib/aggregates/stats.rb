module Aggregates
  class Stats
    def initialize(base, events, speed_change_events)
      @base = { } # process all the events for now
      @events = events
      @speed_change_events = speed_change_events
    end

    Result = Struct.new(:attributes, :inventory, :violations, :side_effects) do
      def to_h
        {
          stats: attributes,
          inventory: inventory.to_s
        }
      end
    end

    def call
      tick_events = TickGenerator.new(events: @speed_change_events).call

      produced_events = Aggregates::TimeProgress.new(tick_events + @events).call

      result_attrs = {}
      result_attrs.merge!(@base)

      triggered = []
      side_effects = []

      pp (@events + produced_events + tick_events).sort_by(&:registered_at).map { |e| [ e.action, e.target.name, e.registered_at.to_s ] }

      (@events + produced_events).each do |event|
        # TODO: extract this to generic reactors
        if event.target.item_type == :consumable && event.action == :eat
          side_effects << Events::Event.new(:consume, event.target)
        end

        process_event(event, result_attrs, triggered)
      end

      side_effects.each do |side_effect_event|
        process_event(side_effect_event, result_attrs, triggered)
      end

      pp "#{tick_events.length} hours passed.."

      inventory = Aggregates::Inventory.new(@events).call

      Result.new(
        result_attrs,
        inventory,
        triggered,
        side_effects
      )
    end

    private

    def process_event(event, result_attrs, triggered)
      event.forces.each do |event_force|
        # NOTE: better to be limit the scope of default write
        unless result_attrs[event_force.space.name]
          result_attrs[event_force.space.name] = 0
        end

        result_attrs[event_force.space.name] += event_force.magnitude

        current_val = result_attrs[event_force.space.name]

        event_force.space.conditions.each do |condition|
          if condition.rule.call(current_val)
            triggered << condition.event_name
          end
        end
      end
    end
  end
end
