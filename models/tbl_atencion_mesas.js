'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_atencion_mesas = sequelize.define('tbl_atencion_mesas', {
    id_mesa: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    str_estado: DataTypes.STRING    
  }, {});
  tbl_atencion_mesas.associate = function(models) {
    tbl_atencion_mesas.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_atencion_mesas; 
};