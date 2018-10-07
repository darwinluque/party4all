'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_pedidos = sequelize.define('tbl_pedidos', {
    id_pedido: DataTypes.STRING,
    id_mesa: DataTypes.STRING,
    vlr_total: DataTypes.DECIMAL,
    id_metodo_pago: DataTypes.STRING,
    str_estado: DataTypes.STRING,
    dtm_fecha_pedido: DataTypes.DATE
  }, {});
  tbl_pedidos.associate = function(models) {
    tbl_pedidos.hasMany(models.tbl_productos_pedido, {
      foreignKey: 'id_pedido', 
      sourceKey: 'id_pedido',
      as: 'productos_pedido'
    });
    tbl_pedidos.belongsTo(models.tbl_mesas, {
      foreignKey: 'id_mesa', 
      targetKey: 'id_mesa',
      as: 'mesa'
    });
  };
  return tbl_pedidos;
};