class Item
  attr_reader :name, :item_type

  def initialize(canonical_name, item_type)
    @name = canonical_name
    @item_type = item_type
    @action_dict = {}
  end

  def add_possible_action(action_name, vectors)
    @action_dict[action_name] = vectors
  end

  def search(action)
    @action_dict[action]
  end
end