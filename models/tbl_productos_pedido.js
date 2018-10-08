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
    tbl_productos_pedido.hasMany(models.tbl_productos, {
      foreignKey: 'id_producto', 
      sourceKey: 'id_producto',
      as: 'productos'
    });
    tbl_productos_pedido.belongsTo(models.tbl_pedidos, {
      foreignKey: 'id_pedido', 
      targetKey: 'id_pedido',
      as: 'pedidos'
    });
  };
  return tbl_productos_pedido;
};