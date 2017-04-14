class Order < ApplicationRecord
  belongs_to :product
  belongs_to :customer
  belongs_to :store

  validates :store_id, presence: true
  validates :customer_id, presence: true
  validates :product_id, presence: true

  before_create :set_info!
  validates_with EnoughProductsValidator
  after_create :decrement_product_quantity!

  def decrement_product_quantity!
    self.product.decrement!(:quantity)
  end

  def set_info!
    self.total = product.price
    self.status = "Pendiente"
  end
end
