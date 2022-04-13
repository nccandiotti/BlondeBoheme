class Appointment < ApplicationRecord
  belongs_to :salon
  belongs_to :user

  validates :time, uniqueness: true
end
