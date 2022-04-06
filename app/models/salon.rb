class Salon < ApplicationRecord
    has_many :stylists
    has_many :appointments, through: :stylists
    has_many :services, throught: :stylists
end
