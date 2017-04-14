class CategorySerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers

  attributes :name

  attribute :links do { products: api_category_path(object.id) } end
end
