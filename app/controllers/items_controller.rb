class ItemsController < ApplicationController
  include ParamsParser
  protect_from_forgery except: :tick

  def tick
    items = []

    items_params.each do |param|
      item = Item.new(param)
      item.tick
      items << item
    end

    render json: items
  end
end
