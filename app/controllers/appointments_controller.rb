class AppointmentsController < ApplicationController
    def index
        render json: Appointment.all, status: :ok

    end

    def show
        appointment = Appointments.find(params[:id])
        render json: appointment, status: :ok
    end

    def create 
        appointment = Appointment.create!(appt_params)
        render json: appointment, status: :ok
    end

    def destroy 
        appt = Appointments.find(params[:id])
        appt.destroy
        render json: {}
    end

    private 
    def appt_params
        params.permit(:time, :duration, :salon_id, :user_id)
    end
end
