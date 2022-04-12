class UserConsultSerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :email, :phone, :graycvg, :hairhx, :allergies
  belongs_to :user
  belongs_to :salon
end
