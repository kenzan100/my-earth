module Events
  class Event
    attr_reader :action, :target, :forces

    def initialize(action, target, forces = [], options = {})
      @action = action
      @target = target
      @forces = forces
      @options = options
    end
  end
end