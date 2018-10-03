'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_votos_canciones = sequelize.define('tbl_votos_canciones', {
    id_lista: DataTypes.STRING,
    id_cancion: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    dtm_fecha_voto: DataTypes.DATE,
    cantidad: DataTypes.INTEGER,
  }, {});
  tbl_votos_canciones.associate = function(models) {
    tbl_votos_canciones.hasMany(models.tbl_canciones, {
      foreignKey: 'id_cancion', 
      sourceKey: 'id_cancion',
      as: 'canciones'
    });
    tbl_votos_canciones.hasMany(models.tbl_listas, {
      foreignKey: 'id_lista', 
      sourceKey: 'id_lista',
      as: 'listas'
    });
  };
  return tbl_votos_canciones;
};