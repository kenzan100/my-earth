module Static
  class Allocatable
    attr_reader :name, :item_type, :action_dict, :labels

    def initialize(canonical_name, item_type = :default, labels = [])
      @name = canonical_name
      @item_type = item_type
      @action_dict = {}
      @labels = labels
      if @item_type == :job
        World::JOBS[canonical_name] = self
      else
        World::ITEMS[canonical_name] = self
      end
    end

    def to_a
      action_dict.map do |action, details|
        "#{name} - #{action} (#{details.vectors.map(&:to_s).join(', ')})"
      end
    end

    def to_h
      {
        actions: action_dict.transform_values do |details|
          {
            vectors: details.vectors,
            rules: details.rules.map(&:to_h)
          }
        end
      }
    end

    def item_type
      :permanent
    end

    Details = Struct.new(:vectors, :rules) do
      def to_h
        { vectors: vectors, rules: rules }
      end
    end

    def add_possible_action(action_name, vectors, rules)
      @action_dict[action_name] = Details.new(vectors, rules)
    end

    def search(action)
      @action_dict[action]
    end
  end
end