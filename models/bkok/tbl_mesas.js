'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_mesas = sequelize.define('tbl_mesas', {
    id_persona: DataTypes.INTEGER,
    id_discoteca: DataTypes.INTEGER,
    num_mesa: DataTypes.INTEGER,
    str_disponible: DataTypes.STRING,
    dtm_fecha: DataTypes.DATE
  }, {});
  tbl_mesas.associate = function(models) {
    /*tbl_mesas.belongsTo(models.tbl_personas);
    tbl_mesas.belongsTo(models.tbl_discotecas);
    tbl_mesas.hasMany(models.tbl_pedidos, {
      foreignKey: 'id_mesa',
      as: 'pedidos',
    });*/
  };
  return tbl_mesas;
};

