class Api::V1::ProductsController < ApplicationController
  def index
    products = paginate Product
                        .order('created_at DESC')
                        .includes(:store)

    render json: products
  end

  def recents
    render json: Product
                .limit(4)
                .order(created_at: :desc)
                .includes(:store)
  end

  def show
    render json: Product.find(params[:id])
  end

end
