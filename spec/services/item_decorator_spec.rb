require 'rails_helper'

describe ItemDecorator do
  let(:items){
    [
      { id: 1, type: 'New Item', quality: 9, days_remaining: 0 },
      { id: 2, type: 'Other Item', quality: 10, days_remaining: 2 }
    ]
  }
  let(:item){ instance_double(Item, :tick) }

  before do
    allow(Item).to receive(:new).exactly(2).times.and_return(item)
    allow(item).to receive(:tick).exactly(2).times
    @item_decorator = ItemDecorator.new(items)
  end

  describe "#items" do
    it "returns items" do
      expect(@item_decorator.items).to_not be_empty
      expect(@item_decorator.items.first).to eq item
    end
  end
end
