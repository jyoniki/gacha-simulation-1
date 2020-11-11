class CreateGacyas < ActiveRecord::Migration[6.0]
  def change
    create_table :gacyas do |t|
      
      t.timestamps
    end
  end
end
