class ServicesController < ApplicationController

def index 
    render json: Service.all, status: :ok
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
