class UserConsultSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :firstname, :lastname, :email, :phone, :graycvg, :hairhx, :allergies, :mugshotone, :mugshottwo, :mugshotthree, :mugshotfour, :mugshotfive
  belongs_to :user
  belongs_to :salon

  def mugshotone
    if object.mugshotone.attached?
      {
        url: rails_blob_url(object.mugshotone)
      }
    end
  end
  def mugshottwo
    if object.mugshottwo.attached?
      {
        url: rails_blob_url(object.mugshottwo)
      }
    end
  end
  def mugshotthree
    if object.mugshotthree.attached?
      {
        url: rails_blob_url(object.mugshotthree)
      }
    end
  end
  def mugshotfour
    if object.mugshotfour.attached?
      {
        url: rails_blob_url(object.mugshotfour)
      }
    end
  end
  def mugshotfive
    if object.mugshotfive.attached?
      {
        url: rails_blob_url(object.mugshotfive)
      }
    end
  end
end
