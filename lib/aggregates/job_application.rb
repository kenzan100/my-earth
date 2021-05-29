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

      stats = Aggregates::Stats.new({}, @events).call.to_h

      chances = @job_event.target.apply_success_vectors.each_with_object([]) do |(space_name, required_amount), chances|
        unless stats[space_name]
          chances << 0
          next
        end

        missing = required_amount - stats[space_name]
        missing_percentage = missing.to_f / required_amount

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