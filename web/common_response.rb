module CommonResponse
  def not_found(target_name)
    [
      404,
      Constants::JSON_TYPE,
      [ { error: "#{target_name} not found in list of items"}.to_json ]
    ]
  end

  def unprocessable(array_of_string)
    [
      422,
      Constants::JSON_TYPE,
      [ { error: array_of_string }.to_json ]
    ]
  end

  def success(result)
    [
      200,
      Constants::JSON_TYPE,
      [ result.to_h.to_json ]
    ]
  end

  module_function :not_found, :unprocessable, :success
end