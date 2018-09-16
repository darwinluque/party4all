'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_personas_discos = sequelize.define('tbl_personas_discos', {
    id_discoteca: DataTypes.STRING,
    id_persona: DataTypes.STRING,
    str_mensaje: DataTypes.STRING,
    str_destinatrario: DataTypes.STRING,
    str_emisor: DataTypes.STRING
  }, {});
  tbl_personas_discos.associate = function(models) {
    // associations can be defined here
  };
  return tbl_personas_discos;
};