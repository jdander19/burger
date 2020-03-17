var orm = require('../config/orm');

class Burger {
  constructor(database = orm) {
    this.db = database;
  }
  
  list() {
    return this.db.selectAll();
  }
  
  add(burger) {
    return this.db.insertOne(burger);
  }
  
  devour(id, data = { devoured: true }) {
    return this.db.updateOne(id, data);
  }
  

  delete(id, data = {}) {
    return this.db.deleteOne(id, data);
  }
}

module.exports = new Burger();