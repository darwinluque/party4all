'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_promociones_personas = sequelize.define('tbl_promociones_personas', {
    id_promocion: DataTypes.INTEGER,
    id_persona: DataTypes.STRING,
    str_estado: DataTypes.STRING,
  }, {});
  tbl_promociones_personas.associate = function(models) {
    tbl_promociones_personas.belongsTo(models.tbl_promociones, {
      foreignKey: 'id_promocion', 
      targetKey: 'id',
      as: 'promocion'
    });
  };
  return tbl_promociones_personas;
};