class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :category, :time, :price, :name
  has_one :salon
end
