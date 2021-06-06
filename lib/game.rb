class Game
  DAY_IN_SECONDS = 86400

  attr_reader :start_time, :initial_speed
  attr_accessor :events, :speed_change_events, :stats

  def initialize
    @events = []
    @speed_change_events = []
    @stats = { money: 100 }

    @start_time = Time.now
    @initial_speed = 20_000 # how fast you want a day to pass (multiplier)
  end

  def add_events(events)
    @events.concat events
    self
  end

  def add_speed_change_events(speed_change_events)
    @speed_change_events.concat speed_change_events
  end
end
