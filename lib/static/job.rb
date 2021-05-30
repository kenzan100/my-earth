module Static
  class Job
    attr_reader :name, :hourly_usd,
                :apply_success_vectors, :skill_growth_vectors, :stress_vectors

    def initialize(
      canonical_name, hourly_usd,
      apply_success_vectors, skill_growth_vectors, stress_vectors
    )
      @name = canonical_name
      @hourly_usd = hourly_usd

      @apply_success_vectors = parse_vector_indication(apply_success_vectors)
      @skill_growth_vectors = parse_vector_indication(skill_growth_vectors)
      @work_stress_vectors = parse_vector_indication(stress_vectors)

      @money_space = Constructs::Space.new(:money)
      @work_vec = Constructs::Vector.new(@money_space, @hourly_usd)
    end

    def item_type
      :permanent
    end

    def search(action)
      {
        work: [@work_vec] + @skill_growth_vectors + @work_stress_vectors
      }[action]
    end

    private

    def parse_vector_indication(vector_indication_hash)
      vector_indication_hash.each_with_object([]) do |(space_name, vector_amount), vectors|
        space = Constructs::Space.new(space_name)
        vectors << Constructs::Vector.new(space, vector_amount)
      end
    end
  end
end