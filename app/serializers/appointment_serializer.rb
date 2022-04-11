class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :duration, :firstname, :lastname
  belongs_to :user
  belongs_to :salon
  
  def firstname 
  self.object.user.firstname 
  end
  def lastname 
  self.object.user.lastname 
  end
end
