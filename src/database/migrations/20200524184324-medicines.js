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
      substancia: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      laboratorio: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      codigoggrem: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      registro: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ean1: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ean2: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ean3: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      produto: {
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