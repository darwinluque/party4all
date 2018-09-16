'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_personas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_genero_sexo: {
        type: Sequelize.INTEGER
      },
      id_estado_civil: {
        type: Sequelize.INTEGER
      },
      id_bebida: {
        type: Sequelize.INTEGER
      },
      num_estrellas: {
        type: Sequelize.INTEGER
      },
      str_primer_nombre: {
        type: Sequelize.STRING
      },
      str_segundo_nombre: {
        type: Sequelize.STRING
      },
      str_primer_apellido: {
        type: Sequelize.STRING
      },
      str_segundo_apellido: {
        type: Sequelize.STRING
      },
      str_tipo_id: {
        type: Sequelize.STRING
      },
      str_num_identificacion: {
        type: Sequelize.STRING
      },
      str_email: {
        type: Sequelize.STRING
      },
      str_token: {
        type: Sequelize.STRING
      },
      str_condiciones: {
        type: Sequelize.STRING
      },
      str_acepta_tart: {
        type: Sequelize.STRING
      },
      dtm_fecha_acepta_trat: {
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
    return queryInterface.dropTable('tbl_personas');
  }
};