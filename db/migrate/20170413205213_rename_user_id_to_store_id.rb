class RenameUserIdToStoreId < ActiveRecord::Migration[5.1]
  def change
    rename_column :products, :user_id, :store_id
  end
end
