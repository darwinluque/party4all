'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_artista = sequelize.define('tbl_artista', {
    id_genero: DataTypes.INTEGER,
    str_nombre: DataTypes.STRING
  }, {});
  tbl_artista.associate = function(models) {
    // associations can be defined here
  };
  return tbl_artista; 
};