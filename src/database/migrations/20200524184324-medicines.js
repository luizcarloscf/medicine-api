'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('medicines', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      Substancia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CNPJ: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Laboratorio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      CodigoGGREM: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Registro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EAN1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EAN2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      EAN3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Produto: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('medicines');
  },
};