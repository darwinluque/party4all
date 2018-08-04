'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_personas = sequelize.define('tbl_personas', {
    id_genero_sexo: DataTypes.INTEGER,
    id_estado_civil: DataTypes.INTEGER,
    id_bebida: DataTypes.INTEGER,
    num_estrellas: DataTypes.INTEGER,
    str_primer_nombre: DataTypes.STRING,
    str_segundo_nombre: DataTypes.STRING,
    str_primer_apellido: DataTypes.STRING,
    str_segundo_apellido: DataTypes.STRING,
    str_tipo_id: DataTypes.STRING,
    str_num_identificacion: DataTypes.STRING,
    str_email: DataTypes.STRING,
    str_token: DataTypes.STRING,
    str_condiciones: DataTypes.STRING,
    str_acepta_tart: DataTypes.STRING,
    dtm_fecha_acepta_trat: DataTypes.DATE
  }, {});
  tbl_personas.associate = function(models) {
    tbl_personas.belongsTo(models.tbl_parametros);
    tbl_personas.belongsTo(models.tbl_parametros);
    tbl_personas.belongsTo(models.tbl_parametros);
    tbl_personas.hasMany(models.tbl_suscriptores, {
      foreignKey: 'id_persona',
      as: 'suscripciones',
    });
    tbl_personas.hasMany(models.tbl_reservas, {
      foreignKey: 'id_persona',
      as: 'reservas',
    });
    tbl_personas.hasMany(models.tbl_personas_discoteca, {
      foreignKey: 'id_persona',
      as: 'personas_disco',
    });
    tbl_personas.hasMany(models.tbl_pqrs, {
      foreignKey: 'id_persona',
      as: 'pqrs',
    });
    tbl_personas.hasMany(models.tbl_generos_fav, {
      foreignKey: 'id_persona',
      as: 'generos_favoritos',
    });
    tbl_personas.hasMany(models.tbl_servicios_discoteca, {
      foreignKey: 'id_persona',
      as: 'servicios_discoteca',
    });
    tbl_personas.hasMany(models.tbl_mesas, {
      foreignKey: 'id_persona',
      as: 'mesas',
    });  
  };
  return tbl_personas;
};

