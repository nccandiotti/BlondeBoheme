class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :stylist, null: false, foreign_key: true
      t.string :time
   

      t.timestamps
    end
  end
end
