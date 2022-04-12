class User < ApplicationRecord
  has_secure_password
  has_many :appointments, dependent: :destroy
  has_many :salons, through: :appointments
  has_many :salons, through: :student_inquiries
  has_many :student_inquiries, dependent: :destroy
  has_many :user_consults
  has_many :salons, through: :user_consults
  has_many :user_images

end
