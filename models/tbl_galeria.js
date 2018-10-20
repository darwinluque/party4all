'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_galeria = sequelize.define('tbl_galeria', {
    id_discoteca: DataTypes.STRING,
    str_url_imagen: DataTypes.STRING,
    str_titulo: DataTypes.STRING
  }, {});
  tbl_galeria.associate = function(models) {
    // associations can be defined here
  };
  return tbl_galeria;
};