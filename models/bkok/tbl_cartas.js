'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_cartas = sequelize.define('tbl_cartas', {
    id_discoteca: DataTypes.INTEGER,
    str_descripcion: DataTypes.STRING,
    str_titulo: DataTypes.STRING
  }, {});
  tbl_cartas.associate = function(models) {
    //tbl_cartas.belongsTo(models.tbl_discotecas);
  };
  return tbl_cartas;
};


