'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_pedidos = sequelize.define('tbl_pedidos', {
    id_mesa: DataTypes.INTEGER,
    vlr_total: DataTypes.DECIMAL,
    id_metodo_pago: DataTypes.STRING,
    str_estado: DataTypes.STRING,
    dtm_fecha_pedido: DataTypes.DATE
  }, {});
  tbl_pedidos.associate = function(models) {
    tbl_pedidos.hasMany(models.tbl_productos_pedido, {
      foreignKey: 'id_pedido', 
      sourceKey: 'id',
      as: 'productos_pedido'
    });
    tbl_pedidos.belongsTo(models.tbl_mesas, {
      foreignKey: 'id_mesa', 
      targetKey: 'id',
      as: 'mesa'
    });
  };
  return tbl_pedidos;
};