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
    tbl_pqrs.belongsTo(models.tbl_personas);
    tbl_pqrs.belongsTo(models.tbl_discotecas);
    tbl_pqrs.belongsTo(models.tbl_parametros);
  };
  return tbl_pqrs;
};

