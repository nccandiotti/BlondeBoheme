class Salon < ApplicationRecord
    has_many :users 
    has_many :appointments, through: :users
end
