'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_promociones_personas = sequelize.define('tbl_promociones_personas', {
    id_promocion: DataTypes.INTEGER,
    id_persona: DataTypes.STRING,
    str_estado: DataTypes.STRING,
  }, {});
  tbl_promociones_personas.associate = function(models) {
  };
  return tbl_promociones_personas;
};