class ChangeSpeedHandler
  def self.call(env)
    game = env['GAME']
    req = Rack::Request.new(env)
    speed = req.params['speed'].to_i
    prev = game.speed_change_events.last&.current_speed || game.initial_speed

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

    game.add_speed_change_events([event])

    [
      200,
      Constants::TEXT_TYPE,
      [ "game speed changed successfully. (#{prev}x -> #{speed}x)"]
    ]
  end
end