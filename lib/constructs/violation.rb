module Constructs
  Violation = Struct.new(:space, :rule, :event_name, :rule_description) do
    def to_h
      {
        space: space.name,
        rule: rule_description,
        event_name: event_name
      }
    end
  end
end