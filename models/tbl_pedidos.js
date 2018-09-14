'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_pedidos = sequelize.define('tbl_pedidos', {
    id_pedido: DataTypes.STRING,
    id_mesa: DataTypes.STRING,
    vlr_total: DataTypes.DECIMAL,
    id_metodo_pago: DataTypes.STRING,
    dtm_fecha_pedido: DataTypes.DATE
  }, {});
  tbl_pedidos.associate = function(models) {
    // associations can be defined here
  };
  return tbl_pedidos;
};