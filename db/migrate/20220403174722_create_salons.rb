class CreateSalons < ActiveRecord::Migration[7.0]
  def change
    create_table :salons do |t|
      t.string :name
      t.string :address
      t.string :instagram

      t.timestamps
    end
  end
end
