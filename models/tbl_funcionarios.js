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
    str_token: DataTypes.STRING,
    usuario: DataTypes.STRING,
    dtm_fecha_nacimiento: DataTypes.DATE
  }, {});
  tbl_funcionarios.associate = function(models) {
    tbl_funcionarios.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
    tbl_funcionarios.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_rol', 
      targetKey: 'str_valor',
      as: 'rol'
    });
  };
  return tbl_funcionarios;
};