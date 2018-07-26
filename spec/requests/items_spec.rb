require "rails_helper"

RSpec.describe ItemsController, type: :request do
  let(:header){ { 'CONTENT_TYPE' => 'application/json', 'ACCEPT' => 'application/json' } }

  def body
    JSON.parse(response.body, symbolize_names: true)
  end

  it "ticks an empty list" do
    post "/items/tick",
      params: { items: [] }.to_json,
      headers: header
    expect(body).to eq []
  end

  it "tick items" do
    items = [ { id: 1, "type": "Normal Item", "days_remaining": 5, "quality": 10 } ]
    post "/items/tick",
      params: { items: items }.to_json,
      headers: header

    expect(body[0][:days_remaining]).to eq 4
  end
end
