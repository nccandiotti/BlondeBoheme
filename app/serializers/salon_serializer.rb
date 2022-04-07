class SalonSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner, :address, :phone, :instagram
end
