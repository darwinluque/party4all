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
    // associations can be defined here
  };
  return tbl_encuesta;
};