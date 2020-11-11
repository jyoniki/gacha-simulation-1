class CreateGachas < ActiveRecord::Migration[6.0]
  def change
    create_table :gachas do |t|
      t.integer :SSR_id
      t.integer :SR_id
      t.integer :R_id
      t.timestamps
    end
  end
end
