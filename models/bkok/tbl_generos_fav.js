'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_generos_fav = sequelize.define('tbl_generos_fav', {
    id_genero: DataTypes.INTEGER,
    id_persona: DataTypes.INTEGER,
    str_like: DataTypes.STRING
  }, {});
  tbl_generos_fav.associate = function(models) {
    //tbl_generos_fav.belongsTo(models.tbl_personas);
    //tbl_generos_fav.belongsTo(models.tbl_parametros);
  };
  return tbl_generos_fav;
};

