class Salon < ApplicationRecord
    has_many :appointments 
    has_many :users, through: :appointments

    has_many :student_inquiries
    has_many :users, through: :student_inquiries
end
