class UserConsultSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :phone, :graycvg, :hairhx, :allergies, :mugshot, :inspo
  has_one :user
  has_one :salon
end
