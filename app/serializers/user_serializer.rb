class UserSerializer < ActiveModel::Serializer
  attributes :id, :admin, :firstname, :lastname, :username, :email, :phone
  has_many :appointments
  # has_many :user_images
end
