'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas = sequelize.define('tbl_listas', {
    id_lista: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    str_titulo_lista: DataTypes.STRING
  }, {});
  tbl_listas.associate = function(models) {
    tbl_listas.hasMany(models.tbl_canciones, {
      foreignKey: 'id_lista', 
      sourceKey: 'id_lista',
      as: 'canciones'
    });
    tbl_listas.hasMany(models.tbl_votos_canciones, {
      foreignKey: 'id_lista', 
      sourceKey: 'id_lista',
      as: 'votos'
    });
    /*tbl_listas.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });*/
  };
  return tbl_listas;
};