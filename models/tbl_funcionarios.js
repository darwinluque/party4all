'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_funcionarios = sequelize.define('tbl_funcionarios', {
    id_discoteca: DataTypes.STRING,
    id_rol: DataTypes.STRING,
    str_identificacion: DataTypes.STRING,
    str_primer_nombre: DataTypes.STRING,
    str_segundo_nombre: DataTypes.STRING,
    str_primer_apellido: DataTypes.STRING,
    str_segundo_apellido: DataTypes.STRING,
    str_email: DataTypes.STRING,
    str_token: DataTypes.STRING
  }, {});
  tbl_funcionarios.associate = function(models) {
    // associations can be defined here
  };
  return tbl_funcionarios;
};