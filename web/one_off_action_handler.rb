class OneOffActionHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    req = Rack::Request.new(env)

    target_name = req.params['target'].to_sym
    action_name = req.params['action'].to_sym

    item_or_job = World::ITEMS[target_name] || World::JOBS[target_name]
    return CommonResponse.not_found(target_name) unless item_or_job

    action = item_or_job.search(action_name)
    return CommonResponse.not_found(action_name) unless action && action.vectors

    event = Events::Event.new(
      action_name,
      item_or_job,
      action.vectors,
      { when: Time.now },
      rules: action.rules || []
    )

    result = Aggregates::Stats.new(
      Game::STATS,
      @events + [event],
      Game::SPEED_CHANGE_EVENTS
    ).call

    @events << event
    CommonResponse.success(result)
  end
end