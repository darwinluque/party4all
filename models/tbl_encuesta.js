'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_encuesta = sequelize.define('tbl_encuesta', {
    id_discoteca: DataTypes.STRING,
    id_artista: DataTypes.STRING,
    num_votos: DataTypes.INTEGER,
    str_activa: DataTypes.STRING,
    dtm_fecha_encuesta: DataTypes.DATE
  }, {});
  tbl_encuesta.associate = function(models) {
    tbl_encuesta.belongsTo(models.tbl_artista, {
      foreignKey: 'id_artista', 
      targetKey: 'id_artista',
      as: 'artista'
    });
  };
  return tbl_encuesta;
};