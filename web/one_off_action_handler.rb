class OneOffActionHandler
  def self.call(env)
    game = env['GAME']
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
      validations: action.validations || []
    )

    result = Aggregates::Stats.new(game).call
    game.add_events([event])
    CommonResponse.success(result)
  end
end