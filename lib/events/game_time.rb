module Events
  class GameTime
    attr_reader :action, :registered_at

    # by default hourly
    def initialize(action, target, forces = [], options = {})
      @action = action
      @target = target
      @registered_at = Time.now
    end
  end
end