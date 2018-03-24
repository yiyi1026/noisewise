class CreateTodos < ActiveRecord::Migration[5.1]
  def change
    create_table :todos do |t|
      t.date :date, null: false
      t.string :topic, null: false
      t.integer :user_id, null: false
      t.boolean :done, null: false
      t.timestamps
    end
  end
end
