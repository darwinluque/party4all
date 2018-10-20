'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_encuesta_personas = sequelize.define('tbl_encuesta_personas', {
    id_encuesta: DataTypes.INTEGER,
    id_persona: DataTypes.STRING,
  }, {});
  tbl_encuesta_personas.associate = function(models) {
    tbl_encuesta_personas.belongsTo(models.tbl_personas, {
      foreignKey: 'id_persona', 
      targetKey: 'str_num_identificacion',
      as: 'persona'
    });
    tbl_encuesta_personas.belongsTo(models.tbl_encuesta, {
      foreignKey: 'id_encuesta', 
      targetKey: 'id',
      as: 'encuesta'
    });
  };
  return tbl_encuesta_personas;
};