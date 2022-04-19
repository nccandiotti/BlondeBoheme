class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :duration, :firstname, :lastname, :deposit_received, :user_id
  belongs_to :salon
  belongs_to :user


  
  def firstname 
  self.object.user.firstname 
  end
  def lastname 
  self.object.user.lastname 
  end
end
