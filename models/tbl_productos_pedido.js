'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_pedido = sequelize.define('tbl_productos_pedido', {
    id_pedido: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    id_producto: DataTypes.STRING,
    num_cantidad: DataTypes.INTEGER,
    vlr_costo: DataTypes.DECIMAL
  }, {});
  tbl_productos_pedido.associate = function(models) {
    // associations can be defined here
  };
  return tbl_productos_pedido;
};