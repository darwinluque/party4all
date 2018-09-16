'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_reservas', {
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
      dtm_fecha_reserva: {
        type: Sequelize.DATE
      },
      str_hora: {
        type: Sequelize.STRING
      },
      num_cantidad_personas: {
        type: Sequelize.INTEGER
      },
      str_motivo: {
        type: Sequelize.STRING
      },
      servicio_decoracion: {
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
    return queryInterface.dropTable('tbl_reservas');
  }
};