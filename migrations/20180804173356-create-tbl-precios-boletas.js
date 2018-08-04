'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_precios_boletas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_evento: {
        type: Sequelize.INTEGER
      },
      str_titulo_boleta: {
        type: Sequelize.STRING
      },
      str_descripcion: {
        type: Sequelize.STRING
      },
      vlr_precio: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('tbl_precios_boletas');
  }
};