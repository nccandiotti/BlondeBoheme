class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :stylist, :belongs_to
  has_one :client
end
