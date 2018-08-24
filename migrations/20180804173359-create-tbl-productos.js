'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_discoteca: {
        type: Sequelize.INTEGER
      },
      str_descripcion: {
        type: Sequelize.STRING
      },
      str_tamano: {
        type: Sequelize.STRING
      },
      str_url_imagen: {
        type: Sequelize.STRING
      },
      vlr_precio: {
        type: Sequelize.DECIMAL
      },
      str_activo: {
        type: Sequelize.STRING
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
    return queryInterface.dropTable('tbl_productos');
  }
};