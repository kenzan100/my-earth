class ScheduleHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    req = Rack::Request.new(env)

    if req.params.empty?
      return [
        200,
        Constants::TEXT_TYPE,
        [ Aggregates::Schedule.new(@events).call.to_s ]
      ]
    end

    target_name = req.params['target'].to_sym
    allocatable = World::ITEMS[target_name] || World::JOBS[target_name]
    return CommonResponse.not_found(target_name) unless allocatable

    schedule_parsed = parse_params(req.params)
    unless schedule_parsed.violations.empty?
      return CommonResponse.unprocessable(schedule_parsed.violations)
    end

    event = Events::Event.new(
      :schedule,
      allocatable,
      allocatable.search(:schedule) || [],
      schedule_parsed.event_option
    )

    @events << event

    return [
      200,
      { 'Content-Type' => 'text/plain' },
      [ Aggregates::Schedule.new(@events).call.to_s ]
    ]
  end

  private

  ParsedSchedule = Struct.new(:action, :time_from, :time_till)
  Parsed = Struct.new(:violations, :result) do
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
  def parse_params(params)
    violations = []

    unless [
      params['scheduled_action'],
      params['scheduled_time_from'],
      params['scheduled_time_till'],
    ].all? { |fragment| fragment.is_a?(String) }
      pp params['scheduled_action']
      pp params['scheduled_time_from']
      pp params['scheduled_time_till']
      violations << "missing attribute: send all of scheduled_action, scheduled_time_from, and scheduled_time_till"
      return Parsed.new(violations, nil)
    end

    unless params['scheduled_time_from'].to_i.between?(0, 24) &&
      params['scheduled_time_till'].to_i.between?(0, 24)
      violations << "scheduled_time_from and scheduled_time_till needs to be within 0 ~ 24 range"
      return Parsed.new(violations, nil)
    end

    Parsed.new(
      violations,
      ParsedSchedule.new(
        params['scheduled_action'].to_sym,
        params['scheduled_time_from'].to_i,
        params['scheduled_time_till'].to_i
      )
    )
  end
end