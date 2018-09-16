'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_votos_canciones = sequelize.define('tbl_votos_canciones', {
    id_lista: DataTypes.STRING,
    id_cancion: DataTypes.STRING
  }, {});
  tbl_votos_canciones.associate = function(models) {
    // associations can be defined here
  };
  return tbl_votos_canciones;
};