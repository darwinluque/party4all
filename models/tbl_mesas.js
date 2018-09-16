'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_mesas = sequelize.define('tbl_mesas', {
    id_mesa: DataTypes.STRING,
    id_persona: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    num_mesa: DataTypes.INTEGER,
    str_disponible: DataTypes.STRING,
    dtm_fecha: DataTypes.DATE
  }, {});
  tbl_mesas.associate = function(models) {
    // associations can be defined here
  };
  return tbl_mesas;
};