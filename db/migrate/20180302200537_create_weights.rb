class CreateWeights < ActiveRecord::Migration[5.1]
  def change
    create_table :weights do |t|
      t.date :date, null: false
      t.float :weight, null: false
      t.integer :user_id, null: false
      t.timestamps
    end

  end
end
