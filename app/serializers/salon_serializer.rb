class SalonSerializer < ActiveModel::Serializer
  attributes :id, :name, :owner, :address, :phone, :instagram
  has_many :users
  has_many :appointments
  has_many :student_inquiries
end
