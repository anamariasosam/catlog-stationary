class Api::V1::Stores::ProductsController < ApplicationController
  before_action :authenticate_as_store!
  respond_to :json

  def index
    products = paginate current_user
                        .products
                        .reorder(created_at: :desc)

    render json: products
  end

  def create
    product = current_user.products.build(product_params)
    if product.save
      render json: product, status: 201
    else
      render json: { errors: product.errors }, status: 422
    end
  end

  def update
    product = current_user.products.find(params[:id])
    if product.update(product_params)
      render json: product, status: 200
    else
      render json: { errors: product.errors }, status: 422
    end
  end

  def destroy
    product = current_user.products.find(params[:id])
    product.destroy
    head 204
  end

  private

    def product_params
      params.permit(:name, :price, :quantity, :image, :description, :photo_id, :store_id, :category_id)
    end
end
