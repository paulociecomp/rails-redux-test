class ItemDecorator
  attr_reader :items

  def initialize(items_params)
    @items = setup(items_params)
  end

  private

  def setup(items_params)
    items_params.map do |param|
      item = Item.new(param)
      item.tick
      item
    end
  end
end
