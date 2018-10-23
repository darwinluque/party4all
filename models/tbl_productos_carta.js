'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_carta = sequelize.define('tbl_productos_carta', {
    id_carta: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    str_estado: DataTypes.STRING,
    num_precio: DataTypes.DECIMAL
  }, {});
  tbl_productos_carta.associate = function(models) {
    tbl_productos_carta.belongsTo(models.tbl_productos_carta, {
      foreignKey: 'id_carta', 
      sourceKey: 'id',
      as: 'carta'
    });
    tbl_productos_carta.hasMany(models.tbl_productos, {
      foreignKey: 'id', 
      targetKey: 'id_producto',
      as: 'productos'
    });
  };
  return tbl_productos_carta;
};