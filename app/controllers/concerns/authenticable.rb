module Authenticable
  def current_user
    @current_user ||= User.find_by(auth_token: request.headers['Authorization'])
  end

  def authenticate_as_customer!
    render json: { errors: "Not authenticated as a Customer" },
    status: :unauthorized unless user_signed_in? && is_a_customer?
  end

  def authenticate_as_store!
    render json: { errors: "Not authenticated as a Store" },
    status: :unauthorized unless user_signed_in? && !is_a_customer?
  end

  def user_signed_in?
    current_user.present?
  end

  def is_a_customer?
    current_user.type == 'Customer'
  end
end
