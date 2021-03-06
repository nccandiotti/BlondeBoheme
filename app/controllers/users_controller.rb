class UsersController < ApplicationController

    def index 
        render json: User.all, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id]=user.id
        render json: user, status: :created
    end
    def update
        user = User.find(params[:id])
        user.update!(user_params)
        render json: user, status: :ok
    end

    def me
        render json: current_user, status: :ok
    end

    private

    def user_params
        params.permit(:firstname, :lastname, :username, :password, :password_confirmation, :email, :phone)
    end
    
end

