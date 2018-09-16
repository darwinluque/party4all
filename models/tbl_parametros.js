'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_parametros = sequelize.define('tbl_parametros', {
    str_dominio: DataTypes.STRING,
    str_valor: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    str_estado: DataTypes.STRING
  }, {});
  tbl_parametros.associate = function(models) {
    // associations can be defined here
  };
  return tbl_parametros;
};