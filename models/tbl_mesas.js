'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_mesas = sequelize.define('tbl_mesas', {
    id_persona: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    num_mesa: DataTypes.STRING,
    str_disponible: DataTypes.STRING,
    dtm_fecha: DataTypes.DATE
  }, {});
  tbl_mesas.associate = function(models) {
    tbl_mesas.hasMany(models.tbl_pedidos, {
      foreignKey: 'id_mesa', 
      sourceKey: 'id',
      as: 'pedidos'
    });
  };
  return tbl_mesas;
};