class ServiceSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :price, :time
  has_one :stylist
end
