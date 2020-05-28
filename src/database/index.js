import Sequelize from 'sequelize';
import Medicine from '../app/models/Medicine.js';
import databaseConfig from '../config/database.js';

const models = [Medicine];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  
  }
}

export default new Database();