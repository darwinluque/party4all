'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_pqrs = sequelize.define('tbl_pqrs', {
    id_persona: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    id_tipo_pqr: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    str_respuesta: DataTypes.STRING,
  }, {});
  tbl_pqrs.associate = function(models) {
    tbl_pqrs.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
    tbl_pqrs.belongsTo(models.tbl_personas, {
      foreignKey: 'id_persona', 
      targetKey: 'str_num_identificacion',
      as: 'persona'
    });
    tbl_pqrs.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_tipo_pqr', 
      targetKey: 'str_valor',
      as: 'tipo_pqr'
    });
  };
  return tbl_pqrs;
};