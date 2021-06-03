class ListHandler
  def initialize(events)
    @events = events
  end

  def call(env)
    [
      200,
      Constants::JSON_TYPE,
      [
        {
          items: World::ITEMS.transform_values(&:to_h),
          jobs: World::JOBS.transform_values(&:to_h),
        }.to_json
      ]
    ]
  end
end