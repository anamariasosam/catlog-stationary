class UserSerializer < ActiveModel::Serializer
  attributes :id,
            :email,
            :auth_token,
            :city,
            :country,
            :name,
            :phone_number,
            :instagram_id,
            :instagram_image,
            :instagram_token,
            :instagram_account,
            :info
end
