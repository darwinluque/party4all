'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_canciones = sequelize.define('tbl_canciones', {
    str_titulo: DataTypes.STRING,
    id_artista: DataTypes.INTEGER
  }, {});
  tbl_canciones.associate = function(models) {
    // associations can be defined here
  };
  return tbl_canciones;
};