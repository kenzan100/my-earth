class ListHandler
  def self.call(env)
    req = Rack::Request.new(env)

    if req.params['text']
      item_lines = World::ITEMS.flat_map { |_, item| item.to_a }.join("\n")
      job_lines = World::JOBS.flat_map { |_, item| item.to_a }.join("\n")

      return [
        200,
        Constants::TEXT_TYPE,
        [
          item_lines + "\n\n" + job_lines
        ]
      ]
    end

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