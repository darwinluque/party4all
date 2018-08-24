'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_funcionarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_discoteca: {
        type: Sequelize.INTEGER
      },
      id_rol: {
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
      str_email: {
        type: Sequelize.STRING
      },
      str_token: {
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
    return queryInterface.dropTable('tbl_funcionarios');
  }
};