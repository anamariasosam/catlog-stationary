class Api::V1::StoresController < ApplicationController
  def show
    render json: Store.find(params[:id])
  end

  def index
    render json: Store.all
  end

  def products
    products = paginate Store
                        .find(params[:id])
                        .products
                        .order('created_at DESC')

    render json: products
  end

  def tag
    stores = Store
            .tagged_with(params[:tag])
            .by_join_date
            
    render json: stores
  end
end
