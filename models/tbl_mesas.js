'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_mesas = sequelize.define('tbl_mesas', {
    id_persona: DataTypes.INTEGER,
    id_discoteca: DataTypes.INTEGER,
    num_mesa: DataTypes.INTEGER,
    str_disponible: DataTypes.STRING,
    dtm_fecha: DataTypes.DATE
  }, {});
  tbl_mesas.associate = function(models) {
    // associations can be defined here
  };
  return tbl_mesas;
};