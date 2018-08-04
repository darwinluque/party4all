'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_pedido = sequelize.define('tbl_productos_pedido', {
    id_pedido: DataTypes.INTEGER,
    id_discoteca: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    num_cantidad: DataTypes.INTEGER,
    vlr_costo: DataTypes.DECIMAL
  }, {});
  tbl_productos_pedido.associate = function(models) {
    /*tbl_productos_pedido.belongsTo(models.tbl_pedidos);
    tbl_productos_pedido.belongsTo(models.tbl_productos);
    tbl_productos_pedido.belongsTo(models.tbl_discotecas);*/
  };
  return tbl_productos_pedido;
};

