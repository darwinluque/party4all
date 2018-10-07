'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas_dj = sequelize.define('tbl_listas_dj', {
    id_lista: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    str_titulo_lista: DataTypes.STRING,
    str_estado: DataTypes.STRING,
  }, {});
  tbl_listas_dj.associate = function(models) {
    tbl_listas_dj.hasMany(models.tbl_canciones, {
      foreignKey: 'id_lista', 
      sourceKey: 'id_lista',
      as: 'canciones'
    });
    /*tbl_listas_dj.hasOne(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });*/
  };
  return tbl_listas_dj;
};