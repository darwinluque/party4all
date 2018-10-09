'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas = sequelize.define('tbl_listas', {
    id_discoteca: DataTypes.STRING,
    str_titulo_lista: DataTypes.STRING
  }, {});
  tbl_listas.associate = function(models) {
    tbl_listas.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_listas;
};