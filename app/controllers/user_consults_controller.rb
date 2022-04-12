class UserConsultsController < ApplicationController
    def index
        render json: UserConsult.all, status: :ok
        
    end

    def create
        consult = UserConsult.create!(consultparams)
        render json: consult, status: :created
        
    end



    private 
    def consultparams
        params.permit(:firstname, :lastname, :hairhx, :allergies, :email, :phone, :user_id, :salon_id, :graycvg)
    end
end
