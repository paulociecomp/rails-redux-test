class ItemsController < ApplicationController
  include ParamsParser
  protect_from_forgery except: :tick

  def tick
    itemDecorator = ItemDecorator.new(items_params)

    render json: itemDecorator.items
  end
end
