module Constructs
  Vector = Struct.new(:space, :direction, :magnitude) do
    def vector
      coefficient = direction == :negative ? -1 : 1
      magnitude * coefficient
    end
  end
end