class Api::V1::Customers::OrdersController < ApplicationController
  before_action :authenticate_as_customer!
  respond_to :json

  def create
    order = current_user.orders.build(order_params)

    if order.save
      render json: order, status: 201
    else
      render json: { errors: order.errors }, status: 422
    end
  end

  def show
    respond_with current_user.orders.find(params[:id])
  end

  def index
    render json: current_user.orders.reorder(created_at: :desc)
  end

  private

    def order_params
      params
      .permit(:status, :total, :store_id, :customer_id, :product_id, :address, :city, :details)
    end
end
