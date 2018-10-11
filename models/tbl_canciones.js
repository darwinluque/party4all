'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_canciones = sequelize.define('tbl_canciones', {
    id_cancion: DataTypes.STRING, 
    str_titulo: DataTypes.STRING,
    id_genero: DataTypes.STRING, 
    id_artista: DataTypes.STRING, 
  }, {});
  tbl_canciones.associate = function(models) {
    tbl_canciones.hasMany(models.tbl_votos_canciones, {
      foreignKey: 'id_cancion', 
      sourceKey: 'id_cancion',
      as: 'votos'
    });
    tbl_canciones.belongsTo(models.tbl_artista, {
      foreignKey: 'id_artista', 
      targetKey: 'id_artista',
      as: 'artista'
    });
    tbl_canciones.belongsTo(models.tbl_listas_dj_canciones, {
      foreignKey: 'id_cancion', 
      targetKey: 'id_cancion',
      as: 'lista_dj'
    });
  };
  return tbl_canciones;
};