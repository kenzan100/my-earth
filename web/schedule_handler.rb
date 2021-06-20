class ScheduleHandler
  def self.call(env)
    game = env['GAME']
    req = Rack::Request.new(env)

    if req.params.empty?
      return [
        200,
        Constants::TEXT_TYPE,
        [ Aggregates::Schedule.new(game.events).call.to_s ]
      ]
    end

    target_name = req.params['target'].to_sym
    allocatable = World::ITEMS[target_name] || World::JOBS[target_name]
    return CommonResponse.not_found(target_name) unless allocatable

    schedule_parsed = parse_params(req.params)
    unless schedule_parsed.errors.empty?
      return CommonResponse.unprocessable(schedule_parsed.errors)
    end

    event = Events::Event.new(
      :schedule,
      allocatable,
      allocatable.search(:schedule) || [],
      schedule_parsed.event_option
    )

    game.add_events([event])

    return [
      200,
      { 'Content-Type' => 'text/plain' },
      [ Aggregates::Schedule.new(game.events).call.to_s ]
    ]
  end

  private

  ParsedSchedule = Struct.new(:action, :time_from, :time_till)
  Parsed = Struct.new(:errors, :result) do
    def event_option
      {
        as: result.action,
        from: result.time_from,
        till: result.time_till
      }
    end
  end

  # TODO schedule prob. can only be a vector space on its own
  # so that validations/side effects can be expressed uniformly
  def self.parse_params(params)
    errors = []

    unless [
      params['scheduled_action'],
      params['scheduled_time_from'],
      params['scheduled_time_till'],
    ].all? { |fragment| fragment.is_a?(String) }
      pp params['scheduled_action']
      pp params['scheduled_time_from']
      pp params['scheduled_time_till']
      errors << "missing attribute: send all of scheduled_action, scheduled_time_from, and scheduled_time_till"
      return Parsed.new(errors, nil)
    end

    unless params['scheduled_time_from'].to_i.between?(0, 24) &&
      params['scheduled_time_till'].to_i.between?(0, 24)
      errors << "scheduled_time_from and scheduled_time_till needs to be within 0 ~ 24 range"
      return Parsed.new(errors, nil)
    end

    Parsed.new(
      errors,
      ParsedSchedule.new(
        params['scheduled_action'].to_sym,
        params['scheduled_time_from'].to_i,
        params['scheduled_time_till'].to_i
      )
    )
  end
end