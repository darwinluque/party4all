'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_votos_canciones = sequelize.define('tbl_votos_canciones', {
    id_lista: DataTypes.INTEGER,
    id_cancion: DataTypes.INTEGER
  }, {});
  tbl_votos_canciones.associate = function(models){
    tbl_votos_canciones.belongsTo(models.tbl_listas);
    tbl_votos_canciones.hasMany(models.tbl_canciones, {
      foreignKey: 'id_cancion',
      as: 'canciones',
    });
  };
  return tbl_votos_canciones;
};

