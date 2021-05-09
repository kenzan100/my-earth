class Main
  def initialize(base, events)
    @base = base
    @events = events
  end

  def resolve
    result = Hash.new { |h, k| h[k] = 0 }
    result.merge!(@base)

    @events.each do |event|
      event.forces.each do |event_force|
        result[event_force.space] += event_force.vector
      end
    end
    result
  end
end

Space = Struct.new(:name)
Force = Struct.new(:space, :direction, :magnitude) do
  def vector
    coefficient = direction == :negative ? -1 : 1
    magnitude * coefficient
  end
end
Event = Struct.new(:name, :forces)
