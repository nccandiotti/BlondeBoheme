class StudentInquiry < ApplicationRecord
belongs_to :user, dependent: :destroy
belongs_to :salon, dependent: :destroy

end
