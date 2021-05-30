module Constructs
  Vector = Struct.new(:space, :magnitude) do
    def to_s
      magnitude_with_prefix = magnitude.negative? ? magnitude.to_s : "+#{magnitude}"
      "#{space.name} #{magnitude_with_prefix}"
    end
  end
end