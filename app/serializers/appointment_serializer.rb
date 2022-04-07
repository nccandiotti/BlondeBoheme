class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :duration
  has_one :salon
  has_one :user
end
