module Constructs
  Vector = Struct.new(:space, :magnitude) do
    def to_s(duration: 1)
      movement = magnitude * duration
      movement_with_prefix = movement.negative? ? movement.to_s : "+#{movement}"
      "#{space.name} #{movement_with_prefix}"
    end
  end
end