'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_votos_canciones = sequelize.define('tbl_votos_canciones', {
    id_lista: DataTypes.INTEGER,
    id_cancion: DataTypes.INTEGER
  }, {});
  tbl_votos_canciones.associate = function(models) {
    // associations can be defined here
  };
  return tbl_votos_canciones;
};