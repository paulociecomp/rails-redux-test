class ItemsController < ApplicationController
  def tick
    items = []

    items_params.each do |param|
      item = Item.new(param)
      item.tick
      items << item
    end

    render json: items
  end

  private

  def items_params
    JSON.parse(request.raw_post, symbolize_names: true)[:items]
  end
end
