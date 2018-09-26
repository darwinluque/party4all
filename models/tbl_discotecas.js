'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_discotecas = sequelize.define('tbl_discotecas', {
    str_identificacion: DataTypes.STRING,
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
    str_estado: DataTypes.STRING, 
    id_vestuario: DataTypes.STRING,
    id_zona: DataTypes.STRING,
    id_genero: DataTypes.STRING,
    id_tipo_rumba: DataTypes.STRING,
  }, {});
  tbl_discotecas.associate = function(models) {
    tbl_discotecas.hasMany(models.tbl_reservas, {
      foreignKey: 'id_discoteca',
      sourceKey: 'str_identificacion',
      as: 'reservas'      
    });
    tbl_discotecas.hasMany(models.tbl_promociones, {
      foreignKey: 'id_discoteca',
      sourceKey: 'str_identificacion',
      as: 'promociones'      
    });
  };
  return tbl_discotecas;
};