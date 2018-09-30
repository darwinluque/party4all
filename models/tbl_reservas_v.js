'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_reservas_v = sequelize.define('tbl_reservas_v', {
    reser_id_reserva: DataTypes.STRING,
    reser_id_persona: DataTypes.STRING,
    reser_id_discoteca: DataTypes.STRING,
    reser_dtm_fecha_reserva: DataTypes.DATE,
    reser_str_hora: DataTypes.STRING,
    reser_num_cantidad_personas: DataTypes.INTEGER,
    reser_str_motivo: DataTypes.STRING,
    reser_servicio_decoracion: DataTypes.STRING,
    per_str_primer_nombre: DataTypes.STRING,
    per_str_segundo_nombre: DataTypes.STRING,
    per_str_primer_apellido: DataTypes.STRING,
    per_str_segundo_apellido: DataTypes.STRING,
    per_str_email: DataTypes.STRING,
    disco_str_nombre: DataTypes.STRING,
    disco_str_direccion: DataTypes.STRING,
    disco_str_barrio: DataTypes.STRING,
    disco_str_num_telefono: DataTypes.STRING,
    disco_str_num_celular: DataTypes.STRING,
    disco_str_url_ubicacion: DataTypes.STRING,
    disco_str_telefono_reserva: DataTypes.STRING
  }, {});
  tbl_reservas_v.associate = function(models) {
    //tbl_reservas.belongsTo(models.tbl_discotecas);
    //tbl_reservas.hasOne(models.tbl_personas);
  };
  return tbl_reservas_v;
};