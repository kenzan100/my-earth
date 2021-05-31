module Events
  class GameTime
    attr_reader :action, :target, :forces, :registered_at

    Target = Struct.new(:name, :item_type)

    # by default hourly
    def initialize(action, target, forces = [], options = {})
      @action = action
      @target = Target.new(target, :game_time)
      @forces = forces
      @registered_at = options[:when] || Time.now
    end
  end
end