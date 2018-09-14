'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_artista = sequelize.define('tbl_artista', {
    id_artsta: DataTypes.STRING,
    str_nombre: DataTypes.STRING,
    id_genero: DataTypes.STRING    
  }, {});
  tbl_artista.associate = function(models) {
    // associations can be defined here
  };
  return tbl_artista; 
};