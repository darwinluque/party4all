'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_cartas = sequelize.define('tbl_cartas', {
    id_discoteca: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    str_titulo: DataTypes.STRING
  }, {});
  tbl_cartas.associate = function(models) {
    // associations can be defined here
  };
  return tbl_cartas;
};