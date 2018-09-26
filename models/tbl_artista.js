'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_artista = sequelize.define('tbl_artista', {
    id_artista: DataTypes.STRING,
    str_nombre: DataTypes.STRING,
    id_genero: DataTypes.STRING    
  }, {});
  tbl_artista.associate = function(models) {
    tbl_artista.hasMany(models.tbl_canciones, {
      foreignKey: 'id_artista', 
      sourceKey: 'id_artista',
      as: 'canciones'
    });
    tbl_artista.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_genero', 
      targetKey: 'str_valor',
      as: 'genero_musical'
    });
  };
  return tbl_artista; 
};