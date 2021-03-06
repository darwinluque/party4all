'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas_dj = sequelize.define('tbl_listas_dj', {
    id_discoteca: DataTypes.STRING,
    str_titulo_lista: DataTypes.STRING,
  }, {});
  tbl_listas_dj.associate = function(models) {
    tbl_listas_dj.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_listas_dj;
};