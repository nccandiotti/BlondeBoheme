class UserImage < ApplicationRecord
  belongs_to :user
  has_one_attached :picture
  # has_many_attached :inspos

  # def mugshot_url
  #   self.img_file.attachment.url
  # end
  # def inspo_url
  #   self.img_file.attachment.url
  # end


end
