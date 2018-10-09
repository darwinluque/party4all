
'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas_dj_canciones = sequelize.define('tbl_listas_dj_canciones', {
    id_lista: DataTypes.INTEGER,
    id_cancion: DataTypes.STRING,
    str_estado: DataTypes.STRING,
  }, {});
  tbl_listas_dj_canciones.associate = function(models) {
    tbl_listas_dj_canciones.hasMany(models.tbl_canciones, {
      foreignKey: 'id_cancion', 
      sourceKey: 'id_cancion',
      as: 'canciones'
    });
    tbl_listas_dj_canciones.belongsTo(models.tbl_listas_dj, {
      foreignKey: 'id_lista', 
      targetKey: 'id',
      as: 'lista_dj'
    });
  };
  return tbl_listas_dj_canciones;
};