module Aggregates
  class Stats
    def initialize(base, events)
      @base = base
      @events = events
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
      result_attrs = {}
      result_attrs.merge!(@base)

      triggered = []
      side_effects = []

      @events.each do |event|
        # TODO: extract this to generic reactors
        if event.target.item_type == :consumable
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