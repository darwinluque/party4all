'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_pqrs = sequelize.define('tbl_pqrs', {
    id_persona: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    id_tipo_pqr: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    dtm_fecha_pqr: DataTypes.DATE
  }, {});
  tbl_pqrs.associate = function(models) {
    // associations can be defined here
  };
  return tbl_pqrs;
};