class UserImagesController < ApplicationController
    # before_action :set_storage_url, only: [:create, :show]
    def index 
        render json: UserImage.all, status: :ok
    end
    
    def create

        post = UserImage.create!(user_image_params)
        post.image.attach(params[:picture])
        render json: post

        # post.image.attach(user_image_params[:picture])
        # render json: {
        #     picture: post.picture,
        #     url: url_for(post.picture)
        # }
        # render json: post
    end

    # def show 
    #     post = UserImage.find(params[:id])
    #     render json: {
    #         picture: post.picture,
    #         url: post.picture.service_url
    #     }
    # end

    private
    def user_image_params
        params.permit(:picture)
    end

    # def set_storage_url
    #     ActiveStorage::Current.url_options= request.base_url
    #     # ActiveStorage::Current.host = request.base_url
    # end
end
