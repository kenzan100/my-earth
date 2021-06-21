module SurvivalWorld
  SPACES = {}
  [
    :sleep,
    :hunger
  ].each do |space_name|
    SPACES[space_name] = Constructs::Space.new(space_name)
  end


  [
    {
      name: :sleep,
      vectors: [
        [:sleep_space, 1]
      ],
      validations: []
    }
  ].each do |h|
    item = Static::Allocatable.new(h[:name], :item)
    item.add_possible_action(
    )
  end
end