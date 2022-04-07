class User < ApplicationRecord
  has_secure_password
  has_many :appointments, dependent: :destroy
  has_many :salons, through: :appointments
end
