module Aggregates
  class TickGenerator
    def initialize(start_time:, events:, initial_speed:)
      @start_time = start_time
      @speed_change_events = events
      @initial_speed = initial_speed
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

    def build_speed_change_event(time, speed_value: @initial_speed)
      # TODO: probably wiser to utilize forces to send speed values and speed as its own space + vector
      Events::GameTime.new(
        :game_speed_change,
        :system,
        [],
        { when: time, speed_val: speed_value }
      )

    end

    def calc_portion(time_pair, speed)
      starting, ending = time_pair
      elapsed = ending.registered_at - starting.registered_at
      tick_rate = Game::DAY_IN_SECONDS.to_f / speed

      (elapsed / tick_rate).floor.times.map do |day_tick|
        registered_at = starting.registered_at + (day_tick * tick_rate)

        Events::GameTime.new(
          :tick,
          :game_time,
          [
            Constructs::Vector.new(SurvivalWorld::SPACES[:sleep], -5),
            Constructs::Vector.new(SurvivalWorld::SPACES[:hunger], -5)
          ],
          {
            when: registered_at,
            game_time: starting.registered_at + (day_tick * Game::DAY_IN_SECONDS),
            speed_val: speed
          }
        )
      end
    end
  end
end
