class ApplyHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    req = Rack::Request.new(env)

    target_name = req.params['target'].to_sym
    job = World::JOBS[target_name]
    return CommonResponse.not_found(target_name) unless job

    event = Events::Event.new(
      :apply,
      job,
      job.search(:apply) || []
    )

    apply_result = Aggregates::JobApplication.new(event, @events).call(luck_percentage: 50)

    if apply_result.bool
      hired_event = Events::Event.new(
        :hired,
        job,
        job.search(:hired) || []
      )
      @events << hired_event
      result = Aggregates::Stats.new(
        Game::STATS,
        @events,
        Game::SPEED_CHANGE_EVENTS
      ).call
      CommonResponse.success(result.to_h.merge(status: "Apply success"))
    else
      CommonResponse.unprocessable(["Apply failed"])
    end

  end
end