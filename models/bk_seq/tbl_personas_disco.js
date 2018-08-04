'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_personas_disco = sequelize.define('tbl_personas_disco', {
    id_discoteca: DataTypes.INTEGER,
    id_persona: DataTypes.INTEGER,
    str_mensaje: DataTypes.STRING,
    str_destinatrario: DataTypes.STRING,
    str_emisor: DataTypes.STRING
  }, {});
  tbl_personas_disco.associate = function(models) {
    // associations can be defined here
  };
  return tbl_personas_disco;
};