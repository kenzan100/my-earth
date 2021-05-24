module Aggregates
  class Inventory
    def initialize(events)
      @events = events
    end

    def call
      init = Hash.new { |h, k| h[k] = 0 }
      relevants = @events.select { |ev| ev.action == :purchase }
      relevants.each_with_object(init) do |ev, hash|
        hash[ev.target] += 1
      end
    end

    def to_s
      call.each_with_object([]) do |(k, v), arr|
        arr << "#{k.name} * #{v} | #{k.item_type}"
      end.join("\n")
    end
  end
end