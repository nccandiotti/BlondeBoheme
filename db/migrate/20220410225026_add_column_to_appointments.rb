class AddColumnToAppointments < ActiveRecord::Migration[7.0]
  def change
    add_column :appointments, :deposit_received, :boolean
  end
end
