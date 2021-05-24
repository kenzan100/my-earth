class Item
  attr_reader :name, :item_type

  def initialize(canonical_name, item_type)
    @name = canonical_name
    @item_type = item_type
  end
end