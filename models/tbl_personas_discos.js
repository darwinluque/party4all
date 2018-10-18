'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_personas_discos = sequelize.define('tbl_personas_discos', {
    id_discoteca: DataTypes.STRING,
    id_persona: DataTypes.STRING,
    str_mensaje: DataTypes.STRING,
    str_destinatrario: DataTypes.STRING,
    str_emisor: DataTypes.STRING
  }, {});
  tbl_personas_discos.associate = function(models) {
    tbl_personas_discos.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
    tbl_personas_discos.belongsTo(models.tbl_personas, {
      foreignKey: 'id_persona', 
      targetKey: 'str_num_identificacion',
      as: 'persona'
    });
  };
  return tbl_personas_discos;
};