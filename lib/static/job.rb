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

      @work_vec = Constructs::Vector.new(World::MONEY_SPACE, @hourly_usd)
      @hired_vec = Constructs::Vector.new(World::JOB_SPACE, 0)

      @action_dict = {
        work: [@work_vec, @hired_vec] + @skill_growth_vectors + @work_stress_vectors
      }
    end

    def to_h
      {
        actions: @action_dict
      }
    end

    def item_type
      :permanent
    end

    def add_possible_action(action_name, vectors)
      @action_dict[action_name] = vectors
    end

    def search(action)
      @action_dict[action]
    end

    private

    def parse_vector_indication(vector_indication_hash)
      vector_indication_hash.each_with_object([]) do |(space, vector_amount), vectors|
        vectors << Constructs::Vector.new(space, vector_amount)
      end
    end
  end
end