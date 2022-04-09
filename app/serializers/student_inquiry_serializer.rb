class StudentInquirySerializer < ActiveModel::Serializer
  attributes :id, :firstname, :lastname, :phone, :technique, :lessonType, :travel
end
