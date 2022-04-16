class UserSerializer < ActiveModel::Serializer
  attributes :id, :admin, :firstname, :lastname, :username, :email, :phone 
  has_many :appointments

 
end
