class AppointmentServiceSerializer < ActiveModel::Serializer
  attributes :id, :appointment, :belongs_to
  has_one :service
end
