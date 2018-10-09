'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_listas_peticiones = sequelize.define('tbl_listas_peticiones', {
    id_lista: DataTypes.STRING,
    str_nombre_cancion: DataTypes.STRING
  }, {});
  tbl_listas_peticiones.associate = function(models) {
    tbl_listas_peticiones.belongsTo(models.tbl_listas, {
      foreignKey: 'id_lista', 
      targetKey: 'id',
      as: 'lista'
    });
  };
  return tbl_listas_peticiones;
};