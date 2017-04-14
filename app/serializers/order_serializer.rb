class OrderSerializer < ActiveModel::Serializer
  attributes :id, :total, :status
  belongs_to :product
  belongs_to :customer
  belongs_to :store
end
