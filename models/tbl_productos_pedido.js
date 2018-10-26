'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_pedido = sequelize.define('tbl_productos_pedido', {
    id_pedido: DataTypes.INTEGER,
    id_carta: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    num_cantidad: DataTypes.INTEGER,
    str_estado: DataTypes.STRING,
    vlr_costo: DataTypes.DECIMAL
  }, {});
  tbl_productos_pedido.associate = function(models) {
    /*tbl_productos_pedido.belongsTo(models.tbl_productos_carta, {
      foreignKey: ['id_carta','id_producto'], 
      sourceKey: ['id_carta','id_producto'],
      as: 'productos_carta'
    });*/
    tbl_productos_pedido.belongsTo(models.tbl_pedidos, {
      foreignKey: 'id_pedido', 
      targetKey: 'id',
      as: 'pedidos'
    });
  };
  return tbl_productos_pedido;
};