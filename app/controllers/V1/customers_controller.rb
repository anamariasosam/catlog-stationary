class V1::CustomersController < ApplicationController
  before_action :authenticate_with_token!, only: [:update, :destroy]
  respond_to :json

  def index
    render json: Customer.all
  end

  def show
    render json: Customer.find(params[:id])
  end

  def create
    user = Customer.new(user_params)
    if user.save
      render json: user, status: 201
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def update
    user = current_user

    if user.update(user_params)
      render json: user, status: 200
    else
      render json: { errors: user.errors }, status: 422
    end
  end

  def destroy
    current_user.destroy
    head 204
  end

  private

    def user_params
      params
      .permit(
        :email,
        :password,
        :password_confirmation,
        :city,
        :country,
        :address,
        :name,
        :phone_number,
        :type,
        :instagram_id,
        :instagram_image,
        :instagram_token,
        :instagram_account
      )
    end
end
