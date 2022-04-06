class Stylist < ApplicationRecord
    has_secure_password
    belongs_to :salon 
    has_many :appointments
    has_many :clients, through: :appointments
end
