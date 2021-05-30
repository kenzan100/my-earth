class ScheduleHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    req = Rack::Request.new(env)

    if req.params.empty?
      return [
        200,
        Constants::JSON_TYPE,
        [ { schedule: Aggregates::Schedule.new(@events) }.to_json ]
      ]
    end

    target_name = req.params['target'].to_sym

    item = World::ITEMS[target_name]

    return not_found(target_name) unless item

    event = Events::Event.new(
      :purchase,
      item,
      item.search(:purchase) || []
    )

    result = Aggregates::Stats.new(Game::STATS, @events + [event]).call

    if result.violations.empty?
      @events << event
      return success(result)
    else
      @events << Events::Event.new(:invalid_purchase, item, [])
      return unprocessable(result)
    end
  end

  private

  def success(result)
    [
      200,
      Constants::JSON_TYPE,
      [ result.to_h.to_json ]
    ]
  end

  def unprocessable(result)
    [
      422,
      Constants::JSON_TYPE,
      [ { error: result.violations }.to_json ]
    ]
  end

  def not_found(target_name)
    [
      404,
      Constants::JSON_TYPE,
      [ { error: "#{target_name} not found in list of items"}.to_json ]
    ]
  end
end