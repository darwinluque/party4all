'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_suscriptores = sequelize.define('tbl_suscriptores', {
    id_persona: DataTypes.INTEGER,
    id_discoteca: DataTypes.INTEGER,
    dtm_fecha_suscripcion: DataTypes.DATE
  }, {});
  tbl_suscriptores.associate = function(models) {
    // associations can be defined here
  };
  return tbl_suscriptores;
};