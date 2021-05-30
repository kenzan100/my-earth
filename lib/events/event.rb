module Events
  class Event
    attr_reader :action, :target, :forces, :registered_at

    def initialize(action, target, forces = [], options = {})
      @action = action
      @target = target
      @forces = forces
      @options = options

      @registered_at = Time.now
    end

    def scheduled_action
      raise unless @action == :schedule

      @options[:as]
    end

    def override(**attrs)
      @action = attrs[:action] if attrs[:action]
    end
  end
end