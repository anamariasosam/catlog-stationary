class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :quantity, :image, :description, :photo_id, :store_name
  has_one :category

  def store_name
    object.store.name
  end
end
