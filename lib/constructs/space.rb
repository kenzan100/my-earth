module Constructs
  class Space
    attr_reader :name
    attr_reader :conditions
    attr_reader :end_states

    Condition = Struct.new(:rule, :event_name)

    def initialize(name)
      @name = name
      @conditions = []
      @end_states = []
    end

    def add_violation(rule, event_name)
      @conditions << Condition.new(rule, event_name)
    end

    def add_endstate(rule, event_name)
      @end_states << Condition.new(rule, event_name)
    end
  end
end