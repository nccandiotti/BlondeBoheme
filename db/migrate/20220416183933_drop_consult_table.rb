class DropConsultTable < ActiveRecord::Migration[7.0]
  def change
    drop_table :consults
  end
end
