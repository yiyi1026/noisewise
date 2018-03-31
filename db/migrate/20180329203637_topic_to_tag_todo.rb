class TopicToTagTodo < ActiveRecord::Migration[5.1]
  def change
    rename_column :todos, :topic, :tag
  end
end
