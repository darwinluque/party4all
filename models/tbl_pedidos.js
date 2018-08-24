'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_pedidos = sequelize.define('tbl_pedidos', {
    id_mesa: DataTypes.INTEGER,
    vlr_total: DataTypes.DECIMAL,
    id_metodo_pago: DataTypes.INTEGER,
    dtm_fecha_pedido: DataTypes.DATE
  }, {});
  tbl_pedidos.associate = function(models) {
    // associations can be defined here
  };
  return tbl_pedidos;
};