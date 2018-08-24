'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_carta = sequelize.define('tbl_productos_carta', {
    id_carta: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    str_estado: DataTypes.STRING
  }, {});
  tbl_productos_carta.associate = function(models) {
    // associations can be defined here
  };
  return tbl_productos_carta;
};