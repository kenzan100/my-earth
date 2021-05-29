module Static
  class Job
    attr_reader :name, :hourly_usd

    def initialize(canonical_name, hourly_usd)
      @name = canonical_name
      @hourly_usd = hourly_usd
    end
  end
end