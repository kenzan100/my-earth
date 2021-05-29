module Static
  class Job
    attr_reader :name, :hourly_usd, :apply_success_vectors, :skill_growth_vectors

    def initialize(canonical_name, hourly_usd, apply_success_vectors, skill_growth_vectors)
      @name = canonical_name
      @hourly_usd = hourly_usd

      @apply_success_vectors = apply_success_vectors
      @skill_growth_vectors = parsed_skill_growth_vectors(skill_growth_vectors)

      @money_space = Constructs::Space.new(:money)
      @work_vec = Constructs::Vector.new(@money_space, :positive, @hourly_usd)
    end

    def item_type
      :permanent
    end

    def search(action)
      {
        work: [@work_vec] + @skill_growth_vectors
      }[action]
    end

    private

    def parsed_skill_growth_vectors(vector_indication_hash)
      vector_indication_hash.each_with_object([]) do |(space_name, vector_amount), vectors|
        space = Constructs::Space.new(space_name)
        vectors << Constructs::Vector.new(space, :positive, vector_amount)
      end
    end
  end
end