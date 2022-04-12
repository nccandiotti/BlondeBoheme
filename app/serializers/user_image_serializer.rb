class UserImageSerializer < ActiveModel::Serializer
  attributes :id
  belongs_to :user

  
end
