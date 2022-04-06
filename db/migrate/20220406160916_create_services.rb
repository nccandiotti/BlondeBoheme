class CreateServices < ActiveRecord::Migration[7.0]
  def change
    create_table :services do |t|
      t.string :name
      t.string :category
      t.string :price
      t.integer :time
      t.belongs_to :stylist, null: false, foreign_key: true

      t.timestamps
    end
  end
end
