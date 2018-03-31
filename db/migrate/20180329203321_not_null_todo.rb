class NotNullTodo < ActiveRecord::Migration[5.1]
  def change
    change_column :todos, :title, :string, null: false
  end
end
