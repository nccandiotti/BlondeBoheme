class UserImagesController < ApplicationController
    # before_action :set_storage_url, only: [:create, :show]
    def index 
        render json: UserImage.all, status: :ok
    end
    
    def create
        post = UserImage.create!(user_image_params)
        render json: post
    end

    private
    def user_image_params
        params.permit(:user_id, :picture)
    end
end
