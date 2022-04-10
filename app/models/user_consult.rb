class UserConsult < ApplicationRecord
  belongs_to :user
  belongs_to :salon
  has_many_attached :mugshots
  has_many_attached :inspos
end
