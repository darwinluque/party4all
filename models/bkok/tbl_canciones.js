'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_canciones = sequelize.define('tbl_canciones', {
    str_titulo: DataTypes.STRING,
    id_artista: DataTypes.INTEGER
  }, {});
  tbl_canciones.associate = function(models) {
    //tbl_canciones.belongsTo(models.tbl_votos_canciones);
    //tbl_canciones.belongsTo(models.tbl_artista);
  };
  return tbl_canciones;
};

