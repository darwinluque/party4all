'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('tbl_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_mesa: {
        type: Sequelize.INTEGER
      },
      vlr_total: {
        type: Sequelize.DECIMAL
      },
      id_metodo_pago: {
        type: Sequelize.INTEGER
      },
      dtm_fecha_pedido: {
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
    return queryInterface.dropTable('tbl_pedidos');
  }
};