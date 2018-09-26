'use strict';
module.exports = (sequelize, DataTypes) => {
  const tbl_reservas = sequelize.define('tbl_reservas', {
    id_reserva: DataTypes.STRING,
    id_persona: DataTypes.STRING,
    id_discoteca: DataTypes.STRING,
    dtm_fecha_reserva: DataTypes.DATE,
    str_hora: DataTypes.STRING,
    num_cantidad_personas: DataTypes.INTEGER,
    str_motivo: DataTypes.STRING,
    servicio_decoracion: DataTypes.STRING
  }, {});
  tbl_reservas.associate = function(models) {
    tbl_reservas.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discotecas'
    });
    tbl_reservas.belongsTo(models.tbl_personas, {
      foreignKey: 'id_persona', 
      targetKey: 'str_num_identificacion',
      as: 'personas'
    });
  };
  return tbl_reservas;
};