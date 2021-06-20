module Events
  class GameTime
    attr_reader :action, :target, :forces, :registered_at, :current_speed, :game_time

    attr_accessor :errors, :end_state

    # by default hourly
    def initialize(action, target, forces = [], options = {})
      @action = action
      @target = target
      @forces = forces
      @errors = []
      @registered_at = options[:when] || Time.now

      @current_speed = options[:speed_val] || raise("speed_val must be provided")

      @game_time = options[:game_time]
    end
  end
end