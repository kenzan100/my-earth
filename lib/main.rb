class Main
  def initialize(base, events)
    @base = base
    @events = events
  end

  Result = Struct.new(:attributes, :triggered_conditions, :side_effects)

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
        result_attrs[event_force.space] += event_force.vector

        current_val = result_attrs[event_force.space]
        event_force.space.conditions.each do |condition|
          if condition.rule.call(current_val)
            triggered << condition.event_name
          end
        end
      end
    end

    Result.new(
      result_attrs,
      triggered,
      side_effects
    )
  end
end

class Space
  attr_reader :name
  attr_reader :conditions

  Condition = Struct.new(:rule, :event_name)

  def initialize(name)
    @name = name
    @conditions = []
  end

  def add_condition(rule, event_name)
    @conditions << Condition.new(rule, event_name)
  end
end

Force = Struct.new(:space, :direction, :magnitude) do
  def vector
    coefficient = direction == :negative ? -1 : 1
    magnitude * coefficient
  end
end
