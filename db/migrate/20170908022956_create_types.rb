class CreateTypes < ActiveRecord::Migration
  def change
    create_table :types do |t|
      t.string :label, {null: false}

      t.timestamps null: false
    end
  end
end