module Aggregates
  class Inventory
    def initialize(events)
      @events = events
    end

    Result = Struct.new(:inventory) do
      def to_s
        inventory.each_with_object([]) do |(k, v), arr|
          arr << "#{k.name} * #{v} | #{k.item_type}"
        end.join("\n")
      end
    end

    def call
      result = Hash.new { |h, k| h[k] = 0 }

      increments = @events.select { |ev| ev.action == :purchase }
      decrements = @events.select { |ev| ev.action == :consume }

      increments.each_with_object(result) do |ev, hash|
        hash[ev.target] += 1
      end
      decrements.each_with_object(result) do |ev, hash|
        hash[ev.target] -= 1
      end

      Result.new(result)
    end
  end
end