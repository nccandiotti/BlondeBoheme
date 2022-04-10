class CreateUserConsults < ActiveRecord::Migration[7.0]
  def change
    create_table :user_consults do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :phone
      t.string :graycvg
      t.string :hairhx
      t.string :allergies
      t.string :mugshot
      t.string :inspo
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :salon, null: false, foreign_key: true

      t.timestamps
    end
  end
end
