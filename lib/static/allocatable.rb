module Static
  class Allocatable
    attr_reader :name, :item_type

    def initialize(canonical_name, item_type)
      @name = canonical_name
      @item_type = item_type
      @action_dict = {}
    end

    def to_h
      {
        actions: @action_dict.transform_values do |details|
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