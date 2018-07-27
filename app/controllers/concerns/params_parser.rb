module ParamsParser
  def items_params
    JSON.parse(request.raw_post, symbolize_names: true, underscore: true)[:items]
  end
end
