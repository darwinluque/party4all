'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_servicios_discoteca = sequelize.define('tbl_servicios_discoteca', {
    id_servicio: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,    
  }, {});
  tbl_servicios_discoteca.associate = function(models) {
    tbl_servicios_discoteca.hasMany(models.tbl_parametros, {
      foreignKey: 'str_valor', 
      sourceKey: 'id_servicio',
      as: 'servicio'
    });
    tbl_servicios_discoteca.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_servicios_discoteca;
};