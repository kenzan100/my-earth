module Events
  class Event
    attr_reader :action, :target, :forces, :registered_at, :game_time

    attr_accessor :violations

    def initialize(action, target, forces = [], options = {})
      @action = action
      @target = target
      @forces = forces
      @options = options
      @violations = []

      @registered_at = options[:when] || Time.now
    end

    def scheduled_action
      raise unless @action == :schedule

      @options[:as]
    end

    def scheduled_duration
      raise unless @action == :schedule

      (@options[:from]...@options[:till])
    end

    def overlaps?(other)
      raise if @action != :schedule || other.action != :schedule

      scheduled_duration.cover?(other.scheduled_duration.first) ||
        other.scheduled_duration.cover?(scheduled_duration.first)
    end

    def override(**attrs)
      @action = attrs[:action] if attrs[:action]
    end
  end
end