'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_personas_discos = sequelize.define('tbl_personas_discos', {
    id_discoteca: DataTypes.INTEGER,
    id_persona: DataTypes.INTEGER,
    str_mensaje: DataTypes.STRING,
    str_destinatrario: DataTypes.STRING,
    str_emisor: DataTypes.STRING
  }, {});
  tbl_personas_discos.associate = function(models) {
    //tbl_personas_discos.belongsTo(models.tbl_personas);
    //tbl_personas_discos.belongsTo(models.tbl_discos);
  };
  return tbl_personas_discos;
};