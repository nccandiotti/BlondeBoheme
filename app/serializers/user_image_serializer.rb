class UserImageSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :picture
  belongs_to :user
  def picture
    if object.picture.attached?
      {
        url: rails_blob_url(object.picture)
      }
    end
  end

  # def serializable_hash(adapter_options = nil, options = {}, adapter_instance = self.class.serialization_adapter_instance)
  #   hash = super
  #   hash.each { |key, value| hash.delete(key) if value.nil? }
  #   hash
  # end

end
