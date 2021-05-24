module Aggregates
  class Status
    def initialize(events)
      @events = events
    end

    def call
    end

    def to_h
      {}
    end
  end
end