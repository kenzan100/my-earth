module Aggregates
  class JobApplication
    # TODO: make sure stats at the time of job apply event is used,
    #       not every single event that's passed in.
    def initialize(events)
      @events = events
      @job_event = events.find do |ev|
        ev.action == :apply && ev.target.is_a?(Static::Job)
      end
    end

    Result = Struct.new(:bool, :side_effects)

    def call(luck_percentage: 0)
      return Result.new(false, []) unless @job_event

      result = Aggregates::Stats.new({}, @events).call

      chances = @job_event.target.apply_success_vectors.each_with_object([]) do |vector, chances|
        unless result.attributes[vector.space.name]
          chances << 0
          next
        end

        missing = vector.magnitude - result.attributes[vector.space.name]
        missing_percentage = missing.to_f / vector.magnitude

        chances << (1 - missing_percentage)
      end

      luck_rate = luck_percentage.to_f / 100
      luck_dice = (rand - 0.5) * 2
      luck_portion = luck_dice * luck_rate
      chance_rate = chances.reduce(&:+).to_f / chances.length

      bool = rand < (chance_rate + luck_portion)
      Result.new(bool, [])
    end
  end
end