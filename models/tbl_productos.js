'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos = sequelize.define('tbl_productos', {
    str_descripcion: DataTypes.STRING,
    str_tamano: DataTypes.STRING,
    str_url_imagen: DataTypes.STRING,
    str_activo: DataTypes.STRING,
  }, {});
  tbl_productos.associate = function(models) {
    // associations can be defined here
  };
  return tbl_productos;
};