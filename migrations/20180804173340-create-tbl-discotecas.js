'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_discotecas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_vestuario: {
        type: Sequelize.INTEGER
      },
      id_zona: {
        type: Sequelize.INTEGER
      },
      id_genero: {
        type: Sequelize.INTEGER
      },
      id_tipo_rumba: {
        type: Sequelize.INTEGER
      },
      str_nombre: {
        type: Sequelize.STRING
      },
      num_estrellas: {
        type: Sequelize.INTEGER
      },
      str_rango_precios: {
        type: Sequelize.STRING
      },
      str_num_telefono: {
        type: Sequelize.STRING
      },
      str_direccion: {
        type: Sequelize.STRING
      },
      str_barrio: {
        type: Sequelize.STRING
      },
      str_num_celular: {
        type: Sequelize.STRING
      },
      str_url_ubicacion: {
        type: Sequelize.STRING
      },
      str_horarios: {
        type: Sequelize.STRING
      },
      str_telefono_reserva: {
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
    return queryInterface.dropTable('tbl_discotecas');
  }
};