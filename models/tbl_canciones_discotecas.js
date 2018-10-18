'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_canciones_discotecas = sequelize.define('tbl_canciones_discotecas', {
    id_discoteca: DataTypes.STRING, 
    id_cancion: DataTypes.STRING, 
    str_titulo: DataTypes.STRING,
    str_genero: DataTypes.STRING, 
    str_artista: DataTypes.STRING, 
    str_estado: DataTypes.STRING, 
  }, {});
  tbl_canciones_discotecas.associate = function(models) {
    /*tbl_canciones_discotecas.belongsTo(models.tbl_artista, {
      foreignKey: 'id_artista', 
      targetKey: 'id_artista',
      as: 'artista'
    });
    /*tbl_canciones.belongsTo(models.tbl_listas_dj_canciones, {
      foreignKey: 'id_cancion', 
      targetKey: 'id_cancion',
      as: 'lista_dj'
    });*/
  };
  return tbl_canciones_discotecas;
};