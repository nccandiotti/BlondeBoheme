class Salon < ApplicationRecord
    has_many :appointments 
    has_many :users, through: :appointments

    has_many :student_inquiries, dependent: :destroy
    has_many :users, through: :student_inquiries

    has_many :user_consults
    has_many :users, through: :user_consults
end
