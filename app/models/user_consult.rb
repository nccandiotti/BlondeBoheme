class UserConsult < ApplicationRecord
  belongs_to :user
  belongs_to :salon
  has_one_attached :mugshotone
  has_one_attached :mugshottwo
  has_one_attached :mugshotthree
  has_one_attached :mugshotfour
  has_one_attached :mugshotfive
  

  
end
