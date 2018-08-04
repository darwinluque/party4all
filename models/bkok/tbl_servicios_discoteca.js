'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_servicios_discoteca = sequelize.define('tbl_servicios_discoteca', {
    id_servicio: DataTypes.INTEGER,
    id_discoteca: DataTypes.INTEGER,
    dtm_fecha_servicio: DataTypes.DATE
  }, {});
  tbl_servicios_discoteca.associate = function(models) {
    //tbl_servicios_discoteca.belongsTo(models.tbl_parametros);
    //tbl_servicios_discoteca.belongsTo(models.tbl_discotecas);
  };
  return tbl_servicios_discoteca;
};

