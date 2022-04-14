class UpdateDepositReceivedColumnOnAppointments < ActiveRecord::Migration[7.0]
  def change
    change_column :appointments, :deposit_received, :boolean, :default =>false
  end
end
