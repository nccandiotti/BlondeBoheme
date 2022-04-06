class CreateAppointmentServices < ActiveRecord::Migration[7.0]
  def change
    create_table :appointment_services do |t|
      t.belongs_to :appointment, null: false, foreign_key: true
      t.belongs_to :service, null: false, foreign_key: true

      t.timestamps
    end
  end
end
