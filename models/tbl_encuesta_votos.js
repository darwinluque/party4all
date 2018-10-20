'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_encuesta_votos = sequelize.define('tbl_encuesta_votos', {
    id_encuesta: DataTypes.INTEGER,
    id_artista: DataTypes.STRING,
    num_votos: DataTypes.INTEGER,
    str_url_imagen: DataTypes.STRING,
  }, {});
  tbl_encuesta_votos.associate = function(models) {
    tbl_encuesta_votos.hasMany(models.tbl_artista, {
      foreignKey: 'id_artista', 
      sourceKey: 'id_artista',
      as: 'artistas'
    });
    tbl_encuesta_votos.belongsTo(models.tbl_encuesta, {
      foreignKey: 'id_encuesta', 
      targetKey: 'id',
      as: 'encuestas'
    });
  };
  return tbl_encuesta_votos;
};