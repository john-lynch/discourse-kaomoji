require 'rails_helper'
require 'html_normalize'

describe PrettyText do

  def n(html)
    HtmlNormalize.normalize(html)
  end

  it 'can replace text' do
    md = PrettyText.cook("This should yield a shrug: /shrug")
    html = "<p>This should yield a shrug: ¯\\_(ツ)_/¯</p>"

    expect(md).to eq(html)
  end

  it 'can ignore invalid sequences' do
    md = PrettyText.cook("This should yield nothing: /nothing")
    html = "<p>This should yield nothing: /nothing</p>"

    expect(md).to eq(html)
  end
end
