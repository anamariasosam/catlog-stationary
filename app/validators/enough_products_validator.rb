class EnoughProductsValidator < ActiveModel::Validator
  def validate(record)
    if record.product.quantity < 1
      record.errors["#{record.product.name}"] << "Is out of stock"
    end
  end
end
