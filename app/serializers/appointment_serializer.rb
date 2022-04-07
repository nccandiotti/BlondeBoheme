class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :duration
  belongs_to :user
  belongs_to :salon
  
end
