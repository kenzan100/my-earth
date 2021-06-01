class PurchaseHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    req = Rack::Request.new(env)

    target_name = req.params['target'].to_sym
    item = World::ITEMS[target_name]
    return CommonResponse.not_found(target_name) unless item

    event = Events::Event.new(
      :purchase,
      item,
      item.search(:purchase) || []
    )

    result = Aggregates::Stats.new(
      Game::STATS,
      @events + [event],
      Game::SPEED_CHANGE_EVENTS
    ).call

    if result.violations.empty?
      @events << event
      return CommonResponse.success(result)
    else
      @events << Events::Event.new(:invalid_purchase, item, [])
      return CommonResponse.unprocessable(result.violations)
    end
  end
end