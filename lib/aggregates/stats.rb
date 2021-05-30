module Aggregates
  class Stats
    def initialize(base, events)
      @base = base
      @events = events
    end

    Result = Struct.new(:attributes, :inventory, :violations, :side_effects) do
      def to_h
        attrs = attributes.each_with_object({}) do |(space, val), hash|
          hash[space.name] = val
        end

        {
          stats: attrs,
          inventory: inventory.to_s
        }
      end
    end

    def call
      result_attrs = Hash.new { |h, k| h[k] = 0 }
      result_attrs.merge!(@base)

      triggered = []
      side_effects = []

      @events.each do |event|
        # TODO: extract this to generic reactors
        if event.target.item_type == :consumable
          side_effects << Events::Event.new(:consume, event.target)
        end

        event.forces.each do |event_force|
          result_attrs[event_force.space] += event_force.magnitude

          current_val = result_attrs[event_force.space]
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
