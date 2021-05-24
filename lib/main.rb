class Main
  def initialize(base, events)
    @base = base
    @events = events
  end

  Result = Struct.new(:attributes, :triggered_conditions)

  def resolve
    result_attrs = Hash.new { |h, k| h[k] = 0 }
    result_attrs.merge!(@base)

    triggered = []

    @events.each do |event|
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
      triggered
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
