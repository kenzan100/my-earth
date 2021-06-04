class TickGenerator
  def initialize(start_time: Game::START_TIME, events: [])
    @start_time = start_time
    @speed_change_events = events
  end

  def call(now = Time.now)
    events = []

    (
      [build_speed_change_event(@start_time)] +
        @speed_change_events +
        [build_speed_change_event(now)]
    ).each_cons(2) do |pair|
      events += calc_portion(pair, pair.first.current_speed)
    end

    events
  end

  private

  def build_speed_change_event(time, speed_value: Game::INITIAL_SPEED)
    # TODO: probably wiser to utilize forces to send speed values and speed as its own space + vector
    Events::GameTime.new(
      :game_speed_change,
      :system,
      [],
      { when: time, speed_val: speed_value }
    )

  end

  DAY_IN_SECONDS = 86400

  def calc_portion(time_pair, speed)
    starting, ending = time_pair
    elapsed = ending.registered_at - starting.registered_at
    tick_rate = DAY_IN_SECONDS.to_f / speed

    (elapsed / tick_rate).floor.times.map do |day_tick|
      registered_at = starting.registered_at + (day_tick * tick_rate)

      Events::GameTime.new(
        :tick,
        :game_time,
        [],
        {
          when: registered_at,
          game_time: starting.registered_at + (day_tick * DAY_IN_SECONDS)
        }
      )
    end
  end
end