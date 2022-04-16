class UserImageSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :picture, :picturetwo
  belongs_to :user
  def picture
    if object.picture.attached?
      {
        url: rails_blob_url(object.picture)
      }
    end
  end

  def picturetwo
    if object.picturetwo.attached?
      {
        url: rails_blob_url(object.picturetwo)
      }
    end
  end



end
