class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.boolean :admin
      t.string :firstname
      t.string :lastname
      t.string :username
      t.string :email
      t.string :password
      t.string :phone

      t.timestamps
    end
  end
end
