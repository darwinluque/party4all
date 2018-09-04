'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_discotecas = sequelize.define('tbl_discotecas', {
    id_vestuario: DataTypes.INTEGER,
    id_zona: DataTypes.INTEGER,
    id_genero: DataTypes.INTEGER,
    id_tipo_rumba: DataTypes.INTEGER,
    str_nombre: DataTypes.STRING,
    num_estrellas: DataTypes.INTEGER,
    str_rango_precios: DataTypes.STRING,
    str_num_telefono: DataTypes.STRING,
    str_direccion: DataTypes.STRING,
    str_barrio: DataTypes.STRING,
    str_num_celular: DataTypes.STRING,
    str_url_ubicacion: DataTypes.STRING,
    str_horarios: DataTypes.STRING,
    str_telefono_reserva: DataTypes.STRING,
    str_identificacion: DataTypes.STRING,
    str_estado: DataTypes.STRING
  }, {});
  tbl_discotecas.associate = function(models) {
    // associations can be defined here
  };
  return tbl_discotecas;
};