class ChangeSpeedHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    req = Rack::Request.new(env)
    speed = req.params['speed'].to_i
    prev = Game::SPEED_CHANGE_EVENTS.last&.current_speed || Game::INITIAL_SPEED

    unless speed.between?(1, 500_000) # max is just feeling for now
      return CommonResponse.unprocessable(
        [
          "Speed values must be 1 ~ 500_000",
          "current speed #{prev} x"
        ]
      )
    end

    event = Events::GameTime.new(
      :game_speed_change,
      :system,
      [],
      { when: Time.now, speed_val: speed }
    )

    Game::SPEED_CHANGE_EVENTS << event

    [
      200,
      Constants::TEXT_TYPE,
      [ "game speed changed successfully. (#{prev}x -> #{speed}x)"]
    ]
  end
end