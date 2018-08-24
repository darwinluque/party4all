'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_precios_boletas = sequelize.define('tbl_precios_boletas', {
    id_evento: DataTypes.INTEGER,
    str_titulo_boleta: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    vlr_precio: DataTypes.DECIMAL
  }, {});
  tbl_precios_boletas.associate = function(models) {
    // associations can be defined here
  };
  return tbl_precios_boletas;
};