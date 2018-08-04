'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_pqrs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_persona: {
        type: Sequelize.INTEGER
      },
      id_discoteca: {
        type: Sequelize.INTEGER
      },
      id_tipo_pqr: {
        type: Sequelize.INTEGER
      },
      str_descripcion: {
        type: Sequelize.STRING
      },
      dtm_fecha_pqr: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('tbl_pqrs');
  }
};