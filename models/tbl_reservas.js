'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_reservas = sequelize.define('tbl_reservas', {
    id_persona: DataTypes.INTEGER,
    id_discoteca: DataTypes.INTEGER,
    dtm_fecha_reserva: DataTypes.DATE,
    str_hora: DataTypes.STRING,
    num_cantidad_personas: DataTypes.INTEGER,
    str_motivo: DataTypes.STRING,
    servicio_decoracion: DataTypes.STRING
  }, {});
  tbl_reservas.associate = function(models) {
    // associations can be defined here
  };
  return tbl_reservas;
};