'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_eventos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_discoteca: {
        type: Sequelize.INTEGER
      },
      id_artista: {
        type: Sequelize.INTEGER
      },
      str_titulo: {
        type: Sequelize.STRING
      },
      dtm_fecha: {
        type: Sequelize.DATE
      },
      str_descripcion: {
        type: Sequelize.STRING
      },
      str_url_imagen: {
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
    return queryInterface.dropTable('tbl_eventos');
  }
};