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
    str_telefono_reserva: DataTypes.STRING
  }, {});
  tbl_discotecas.associate = function(models) {
    /*tbl_discotecas.belongsTo(models.tbl_parametros);
    tbl_discotecas.belongsTo(models.tbl_parametros);
    tbl_discotecas.belongsTo(models.tbl_parametros);
    tbl_discotecas.hasMany(models.tbl_promociones, {
      foreignKey: 'id_discoteca',
      as: 'promociones',
    });
    tbl_discotecas.hasMany(models.tbl_cartas, {
      foreignKey: 'id_discoteca',
      as: 'cartas',
    });
    tbl_discotecas.hasMany(models.tbl_listas, {
      foreignKey: 'id_discoteca',
      as: 'listas',
    });
    tbl_discotecas.hasMany(models.tbl_eventos, {
      foreignKey: 'id_discoteca',
      as: 'eventos',
    });
    tbl_discotecas.hasMany(models.tbl_encuesta, {
      foreignKey: 'id_discoteca',
      as: 'encuestas',
    });
    tbl_discotecas.hasMany(models.tbl_productos, {
      foreignKey: 'id_discoteca',
      as: 'productos',
    });
    tbl_discotecas.hasMany(models.tbl_productos_pedido, {
      foreignKey: 'id_discoteca',
      as: 'productos_pedido',
    });
    tbl_discotecas.hasMany(models.tbl_mesas, {
      foreignKey: 'id_discoteca',
      as: 'mesas',
    });
    tbl_discotecas.hasMany(models.tbl_suscriptores, {
      foreignKey: 'id_discoteca',
      as: 'suscriptores',
    });
    tbl_discotecas.hasMany(models.tbl_reservas, {
      foreignKey: 'id_discoteca',
      as: 'reservas',
    });
    tbl_discotecas.hasMany(models.tbl_personas_discoteca, { 
      foreignKey: 'id_discoteca',
      as: 'personas_disco',
    });
    tbl_discotecas.hasMany(models.tbl_servicios_discoteca, {
      foreignKey: 'id_discotecas',
      as: 'servicios',
    });
    tbl_discotecas.hasMany(models.tbl_pqrs, {
      foreignKey: 'id_discotecas',
      as: 'pqrs',
    });
    tbl_discotecas.hasMany(models.tbl_funcionarios, {
      foreignKey: 'id_discotecas',
      as: 'funcionarios',
    });  */
  };
  return tbl_discotecas;
};

