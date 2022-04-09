class StudentInquiriesController < ApplicationController

def index 
    render json: StudentInquiry.all, status: :ok
end
def show 
    inquiry = StudentInquiry.find(params[:id])
    render json: inquiry, status: :ok
end

def create 
    inquiry = StudentInquiry.create!(inquiry_params)
    render json: inquiry, status: :created
end

private 
def inquiry_params 
    params.permit(:firstname, :lastname, :email, :phone, :technique, :travel, :lessonType, :user_id, :salon_id)
end

end
