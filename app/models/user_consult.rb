class UserConsult < ApplicationRecord
  belongs_to :user
  belongs_to :salon
  has_one_attached :mugshot
  has_one_attached :inspo
end
