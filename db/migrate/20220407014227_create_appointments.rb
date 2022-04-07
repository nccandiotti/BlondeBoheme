class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.belongs_to :salon, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true
      t.string :time
      t.string :duration

      t.timestamps
    end
  end
end
