class CreateStylists < ActiveRecord::Migration[7.0]
  def change
    create_table :stylists do |t|

      t.string :first_name
      t.string :last_name
      t.string :email
      t.string :phone
      t.string :username
      t.string :password_digest
      t.string :instagram
      t.belongs_to :salon, null: false, foreign_key: true

    
      t.timestamps
    end
  end
end
