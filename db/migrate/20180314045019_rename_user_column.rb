class RenameUserColumn < ActiveRecord::Migration[5.1]
  def change
    rename_column :weights, :weight, :weight_value
  end
end
