'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_suscriptores = sequelize.define('tbl_suscriptores', {
    id_persona: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    dtm_fecha_suscripcion: DataTypes.DATE
  }, {});
  tbl_suscriptores.associate = function(models) {
    // associations can be defined here
  };
  return tbl_suscriptores;
};