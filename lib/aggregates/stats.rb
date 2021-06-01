module Aggregates
  class Stats
    def initialize(base, events, speed_change_events)
      @base = base
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

      Aggregates::TimeProgress.new(tick_events + @events).call.each do |produced_event|
        @events << produced_event
      end

      result_attrs = {}
      result_attrs.merge!(@base)

      triggered = []
      side_effects = []


      events_to_process = @events.reject { |eve| eve.registered_at < Game::LAST_STATS_PROCESSED_AT[:val] }

      events_to_process.each do |event|
        # TODO: extract this to generic reactors
        if event.target.item_type == :consumable && event.action != :schedule
          side_effects << Events::Event.new(:consume, event.target)
        end

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
      Game::LAST_STATS_PROCESSED_AT[:val] = Time.now

      side_effects.each do |side_effect_event|
        @events << side_effect_event
      end

      inventory = Aggregates::Inventory.new(@events).call

      Result.new(
        result_attrs,
        inventory,
        triggered,
        side_effects
      )
    end
  end
end
