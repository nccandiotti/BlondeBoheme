class UsersController < ApplicationController


    def index 
        render json: User.all
    end


    def create 
        user = User.create!(user_params)
        render json: user
    end
    def update 
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user
    end

    def destroy 
        user = User.find(params[:id])
        user.destroy
        render json: {}
    end

    private
    def user_params
        params.permit(:first_name, :last_name, :email, :phone)
    end
end
