import Sequelize, { Model } from 'sequelize';

class Medicine extends Model {
  static init(sequelize) {
    super.init(
      {
        Substancia: Sequelize.STRING,
        CNPJ: Sequelize.STRING,
        Laboratorio: Sequelize.STRING,
        CodigoGGREM: Sequelize.STRING,
        Registro: Sequelize.STRING,
        EAN1: Sequelize.STRING,
        EAN2: Sequelize.STRING,
        EAN3: Sequelize.STRING,
        Produto: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
  }
}

export default Medicine;