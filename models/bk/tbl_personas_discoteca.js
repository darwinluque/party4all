'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_personas_discoteca = sequelize.define('tbl_personas_discoteca', {
    id_discoteca: DataTypes.INTEGER,
    id_persona: DataTypes.INTEGER,
    str_mensaje: DataTypes.STRING,
    str_destinatrario: DataTypes.STRING,
    str_emisor: DataTypes.STRING
  }, {});
  tbl_personas_discoteca.associate = function(models) {
    tbl_personas_discoteca.belongsTo(models.tbl_personas);
    tbl_personas_discoteca.belongsTo(models.tbl_discotecas);
  };
  return tbl_personas_discoteca;
};