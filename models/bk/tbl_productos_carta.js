'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos_carta = sequelize.define('tbl_productos_carta', {
    id_carta: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    str_estado: DataTypes.STRING
  }, {});
  tbl_productos_carta.associate = function(models) {
    tbl_productos_carta.belongsTo(models.tbl_cartas);
    tbl_productos_carta.belongsTo(models.tbl_productos);
  };
  return tbl_productos_carta;
};


