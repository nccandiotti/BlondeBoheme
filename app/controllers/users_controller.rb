class UsersController < ApplicationController


    def index 
        user = User.all
        render json: user
    end

    
    def me
        render json: current_user, status: :ok
    end

    def create 
        user = User.create!(user_params)
        session[:user_id]=user.id
        render json: user, status: :created
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
        params.permit(:first_name, :last_name, :email, :phone, :username, :password)
    end
end
