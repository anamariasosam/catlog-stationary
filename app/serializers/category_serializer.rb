class CategorySerializer < ActiveModel::Serializer
  attributes :name

  link(:products) { api_category_path(object.id) }
end
