'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_canciones = sequelize.define('tbl_canciones', {
    id_cancion: DataTypes.STRING, 
    str_titulo: DataTypes.STRING,
    id_genero: DataTypes.STRING, 
    id_artista: DataTypes.STRING, 
    id_lista: DataTypes.STRING
  }, {});
  tbl_canciones.associate = function(models) {
    // associations can be defined here
  };
  return tbl_canciones;
};