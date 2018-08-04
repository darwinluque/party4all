'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas = sequelize.define('tbl_listas', {
    id_discoteca: DataTypes.INTEGER,
    str_titulo_lista: DataTypes.STRING
  }, {});
  tbl_listas.associate = function(models) {
    // associations can be defined here
  };
  return tbl_listas;
};