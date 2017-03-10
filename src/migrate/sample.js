/*
class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, limit: 191
      t.string :image, limit: 191
      t.boolean :mail_delivery
      t.text :notes

      t.timestamps
    end
  end
end
*/

import 'IdbMigrate' from '../idb_migrate';

class CreateUsers extends IdbMigrate {
    constructor() {
        console.log('CreateUsers.constructor');
    }
}
