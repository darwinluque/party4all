'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_encuesta = sequelize.define('tbl_encuesta', {
    id_discoteca: DataTypes.STRING,
    str_titulo: DataTypes.STRING,
    str_pregunta: DataTypes.STRING,
    str_url_imagen: DataTypes.STRING
  }, {});
  tbl_encuesta.associate = function(models) {
    tbl_encuesta.hasMany(models.tbl_encuesta_votos, {
      foreignKey: 'id_encuesta', 
      sourceKey: 'id',
      as: 'votos'
    });
    tbl_encuesta.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_encuesta;
};