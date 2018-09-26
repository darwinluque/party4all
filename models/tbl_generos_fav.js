'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_generos_fav = sequelize.define('tbl_generos_fav', {
    id_genero: DataTypes.STRING,
    id_persona: DataTypes.STRING,
    str_like: DataTypes.STRING
  }, {});
  tbl_generos_fav.associate = function(models) {
    tbl_generos_fav.belongsTo(models.tbl_personas, {
      foreignKey: 'id_persona', 
      targetKey: 'str_num_identificacion',
      as: 'personas'
    });
    tbl_generos_fav.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_genero', 
      targetKey: 'str_valor',
      as: 'generos_favoritos'
    });
  };
  return tbl_generos_fav;
};