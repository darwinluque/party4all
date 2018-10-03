'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_personas = sequelize.define('tbl_personas', {
    id_genero_sexo: DataTypes.STRING,
    id_estado_civil: DataTypes.STRING,
    id_bebida: DataTypes.STRING,
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
    dtm_fecha_acepta_trat: DataTypes.DATE,
    dtm_fecha_nacimiento: DataTypes.DATE,
    str_celular: DataTypes.STRING,
    str_password: DataTypes.STRING,
    str_facebook_id: DataTypes.STRING
  }, {});
  tbl_personas.associate = function(models) {
    tbl_personas.hasMany(models.tbl_reservas, {
      foreignKey: 'id_persona', 
      sourceKey: 'str_num_identificacion',
      as: 'reservas'
    });
    tbl_personas.hasMany(models.tbl_generos_fav, {
      foreignKey: 'id_persona', 
      sourceKey: 'str_num_identificacion',
      as: 'generos_favoritos'
    });
    tbl_personas.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_genero_sexo', 
      targetKey: 'str_valor',
      as: 'genero'
    });
    tbl_personas.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_estado_civil', 
      targetKey: 'str_valor',
      as: 'estado_civil'
    });
    tbl_personas.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_bebida', 
      targetKey: 'str_valor',
      as: 'bebida'
    });
    tbl_personas.belongsTo(models.tbl_parametros, {
      foreignKey: 'str_tipo_id', 
      targetKey: 'str_valor',
      as: 'tipo_id'
    });
    tbl_personas.belongsTo(models.tbl_parametros, {
      foreignKey: 'str_condiciones', 
      targetKey: 'str_valor',
      as: 'condiciones'
    });
  };
  return tbl_personas;
};