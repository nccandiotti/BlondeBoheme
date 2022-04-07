class SalonsController < ApplicationController
 def index
    render json: Salon.all, status: :ok
 end

 def show 
    salon = Salon.find(params[:id])
    render json: salon
 end
end
