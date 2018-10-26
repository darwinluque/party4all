'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_carta = sequelize.define('tbl_productos_carta', {
    id_carta: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    str_estado: DataTypes.STRING,
    num_precio: DataTypes.DECIMAL,
    str_url_imagen: DataTypes.STRING
  }, {});
  tbl_productos_carta.associate = function(models) {
    tbl_productos_carta.belongsTo(models.tbl_cartas, {
      foreignKey: 'id_carta', 
      sourceKey: 'id',
      as: 'carta'
    });
    tbl_productos_carta.belongsTo(models.tbl_productos, {
      foreignKey: 'id_producto', 
      targetKey: 'id',
      as: 'producto'
    });
  };
  return tbl_productos_carta;
};