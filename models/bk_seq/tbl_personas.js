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
    // associations can be defined here
  };
  return tbl_personas;
};