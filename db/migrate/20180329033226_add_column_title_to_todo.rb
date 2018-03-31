class AddColumnTitleToTodo < ActiveRecord::Migration[5.1]
  def change
    add_column :todos, :title, :string
  end
end
