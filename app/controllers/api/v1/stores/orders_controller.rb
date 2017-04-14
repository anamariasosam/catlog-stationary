class Api::V1::Stores::OrdersController < ApplicationController
  before_action :authenticate_as_store!

  respond_to :json

  def index
    respond_with current_user.orders
  end

  def show
    respond_with current_user.orders.find(params[:id])
  end

  def update
    order = current_user.orders.find(params[:id])
    if order.update(order_params)
      render json: order, status: 200
    else
      render json: { errors: order.errors }, status: 422
    end
  end

  private

    def order_params
      params
      .permit(:status, :total, :store_id, :customer_id, :product_id, :address, :city, :details)
    end
end
