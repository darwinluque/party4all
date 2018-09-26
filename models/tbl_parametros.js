'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_parametros = sequelize.define('tbl_parametros', {
    str_dominio: DataTypes.STRING,
    str_valor: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    str_estado: DataTypes.STRING
  }, {});
  tbl_parametros.associate = function(models) {
    // No tiene relación porque no nteresa saber e parametro en donde tiene persistencia
    tbl_parametros.hasMany(models.tbl_artista, {
      foreignKey: 'id_genero', 
      sourceKey: 'str_valor',
      as: 'artistas'
    });
  };
  return tbl_parametros;
};