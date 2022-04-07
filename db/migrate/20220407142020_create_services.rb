class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :category
      t.string :time
      t.string :price
      t.string :name
      t.belongs_to :salon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
