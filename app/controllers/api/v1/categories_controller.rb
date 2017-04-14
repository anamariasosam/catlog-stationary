class Api::V1::CategoriesController < ApplicationController
  def index
    render json: Category.all.order('name ASC')
  end

  def show
    products = paginate Category
                        .find(params[:id])
                        .products
                        .reorder(created_at: :desc)
                        .includes(:store)

    render json: products
  end
end
