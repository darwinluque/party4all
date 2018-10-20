'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_servicios_discoteca = sequelize.define('tbl_servicios_discoteca', {
    id_servicio: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,    
  }, {});
  tbl_servicios_discoteca.associate = function(models) {
    // associations can be defined here
  };
  return tbl_servicios_discoteca;
};