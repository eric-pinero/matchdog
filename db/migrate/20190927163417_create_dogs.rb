class CreateDogs < ActiveRecord::Migration[5.2]
  def change
    create_table :dogs do |t|
      t.string :breed, null: false
      t.string :sub_breed, null: false
    end
  end
end
