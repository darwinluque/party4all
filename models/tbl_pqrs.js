'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_pqrs = sequelize.define('tbl_pqrs', {
    id_persona: DataTypes.INTEGER,
    id_discoteca: DataTypes.INTEGER,
    id_tipo_pqr: DataTypes.INTEGER,
    str_descripcion: DataTypes.STRING,
    dtm_fecha_pqr: DataTypes.DATE
  }, {});
  tbl_pqrs.associate = function(models) {
    // associations can be defined here
  };
  return tbl_pqrs;
};