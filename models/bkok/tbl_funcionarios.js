'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_funcionarios = sequelize.define('tbl_funcionarios', {
    id_discoteca: DataTypes.INTEGER,
    id_rol: DataTypes.INTEGER,
    str_primer_nombre: DataTypes.STRING,
    str_segundo_nombre: DataTypes.STRING,
    str_primer_apellido: DataTypes.STRING,
    str_segundo_apellido: DataTypes.STRING,
    str_email: DataTypes.STRING,
    str_token: DataTypes.STRING
  }, {});
  tbl_funcionarios.associate = function(models) {
    //tbl_funcionarios.belongsTo(models.tbl_parametros);
    //tbl_funcionarios.belongsTo(models.tbl_discotecas);
  };
  return tbl_funcionarios;
};

