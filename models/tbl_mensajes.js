'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_mensajes = sequelize.define('tbl_mensajes', {
    id_discoteca: DataTypes.STRING,
    id_persona: DataTypes.STRING,    
    str_estado: DataTypes.STRING,
    str_url_imagen: DataTypes.STRING,
  }, {});
  tbl_mensajes.associate = function(models) {
    tbl_mensajes.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_mensajes;
};