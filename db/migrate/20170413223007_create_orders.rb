class CreateOrders < ActiveRecord::Migration[5.1]
  def change
    create_table :orders do |t|
      t.string :status
      t.float :total
      t.references :product, foreign_key: true
      t.text :details
      t.text :address
      t.string :city

      t.references :store, index: true, foreign_key: { to_table: :users }
      t.references :customer, index: true, foreign_key: { to_table: :users }
      t.timestamps
    end
  end
end
