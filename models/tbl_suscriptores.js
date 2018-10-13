'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_suscriptores = sequelize.define('tbl_suscriptores', {
    id_persona: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    dtm_fecha_suscripcion: DataTypes.DATE
  }, {});
  tbl_suscriptores.associate = function(models) {
    tbl_suscriptores.belongsTo(models.tbl_personas, {
      foreignKey: 'id_persona', 
      targetKey: 'str_num_identificacion',
      as: 'persona'
    });
    tbl_suscriptores.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_suscriptores;
};