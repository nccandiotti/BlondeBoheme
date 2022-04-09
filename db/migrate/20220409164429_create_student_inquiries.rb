class CreateStudentInquiries < ActiveRecord::Migration[7.0]
  def change
    create_table :student_inquiries do |t|
      t.string :firstname
      t.string :lastname
      t.string :phone
      t.string :email
      t.string :technique
      t.string :travel
      t.string :lessonType
      t.belongs_to :salon, null: false, foreign_key: true
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end

