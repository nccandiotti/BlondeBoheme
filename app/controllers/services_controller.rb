class ServicesController < ApplicationController

def index 
    render json: Service.all, status: :ok
end

def luxuryServices 
    render json: Service.all.where(category: "luxury"), status: :ok
end

def simpleServices 
    render json: Service.all.where(category: "simplicity"), status: :ok
end

def therapeuticServices 
    render json: Service.all.where(category: "therapeutic"), status: :ok
end


def show 
    service = Service.find(params[:id])
    render json: service, status: :ok
end

def create 
    service = Service.create!(service_params)
    render json: service, status: :ok
end

def destroy 
service = Service.find(params[:id])
service.destroy
render json: service, status: :ok
end

end
