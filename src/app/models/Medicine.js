import Sequelize, { Model } from 'sequelize';

class Medicine extends Model {
  static init(sequelize) {
    super.init(
      {
        substancia: Sequelize.STRING,
        cnpj: Sequelize.STRING,
        laboratorio: Sequelize.STRING,
        codigoggrem: Sequelize.STRING,
        registro: Sequelize.STRING,
        ean1: Sequelize.STRING,
        ean2: Sequelize.STRING,
        ean3: Sequelize.STRING,
        produto: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    return this;
  }
}

export default Medicine;