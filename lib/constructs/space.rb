module Constructs
  class Space
    attr_reader :name
    attr_reader :conditions

    Condition = Struct.new(:rule, :event_name)

    def initialize(name)
      @name = name
      @conditions = []
    end

    def add_violation(rule, event_name)
      @conditions << Condition.new(rule, event_name)
    end
  end
end