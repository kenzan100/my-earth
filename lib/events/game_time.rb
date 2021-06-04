module Events
  class GameTime
    attr_reader :action, :target, :forces, :registered_at, :current_speed, :game_time

    attr_accessor :violations, :end_state

    # by default hourly
    def initialize(action, target, forces = [], options = {})
      @action = action
      @target = target
      @forces = forces
      @violations = []
      @registered_at = options[:when] || Time.now

      # TODO: 1 is a lame default; any way to send the current speed from system?
      @current_speed = options[:speed_val] || 1

      @game_time = options[:game_time]
    end
  end
end