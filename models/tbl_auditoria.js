'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_auditoria = sequelize.define('tbl_auditoria', {
    id_artista: DataTypes.STRING,
    str_nombre: DataTypes.STRING,
    id_genero: DataTypes.STRING    
  }, {});
  tbl_auditoria.associate = function(models) {
    // associations can be defined here
  };
  return tbl_auditoria; 
};