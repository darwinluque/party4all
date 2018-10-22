'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_mensajes = sequelize.define('tbl_mensajes', {
    id_discoteca: DataTypes.STRING,
    id_persona: DataTypes.STRING,
    str_mensaje: DataTypes.STRING,
  }, {});
  tbl_mensajes.associate = function(models) {
  };
  return tbl_mensajes;
};