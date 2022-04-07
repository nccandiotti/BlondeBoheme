class UserSerializer < ActiveModel::Serializer
  attributes :id, :admin, :firstname, :lastname, :username, :email, :password, :phone
end
