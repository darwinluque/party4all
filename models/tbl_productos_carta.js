'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_carta = sequelize.define('tbl_productos_carta', {
    id_carta: DataTypes.STRING,
    id_producto: DataTypes.STRING,
    str_estado: DataTypes.STRING,
    num_precio: DataTypes.DECIMAL
  }, {});
  tbl_productos_carta.associate = function(models) {
    // associations can be defined here
  };
  return tbl_productos_carta;
};