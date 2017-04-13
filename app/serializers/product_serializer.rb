class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :image, :description, :photo_id
  has_one :category
end
