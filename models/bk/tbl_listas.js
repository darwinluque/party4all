'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas = sequelize.define('tbl_listas', {
    id_discoteca: DataTypes.INTEGER,
    str_titulo_lista: DataTypes.STRING
  }, {});
  tbl_listas.associate = function(models){
    tbl_listas.belongsTo(models.tbl_discotecas);
    tbl_listas.hasMany(models.tbl_votos_canciones, {
      foreignKey: 'id_lista',
      as: 'votos_canciones',
    });
  };
  return tbl_listas;
};

