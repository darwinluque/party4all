'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_eventos = sequelize.define('tbl_eventos', {
    id_discoteca: DataTypes.STRING,
    str_titulo: DataTypes.STRING,
    id_artista: DataTypes.STRING,
    str_titulo: DataTypes.STRING,
    dtm_fecha: DataTypes.DATE,
    str_descripcion: DataTypes.STRING,
    str_url_imagen: DataTypes.STRING,
    str_estado: DataTypes.STRING,
    str_lugar: DataTypes.STRING
  }, {});
  tbl_eventos.associate = function(models) {
    tbl_eventos.hasMany(models.tbl_precios_boletas, {
      foreignKey: 'id_evento', 
      sourceKey: 'id',
      as: 'boletas'
    });
    tbl_eventos.belongsTo(models.tbl_artista, {
      foreignKey: 'id_artista', 
      targetKey: 'id_artista',
      as: 'artista'
    });
    tbl_eventos.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discoteca'
    });
  };
  return tbl_eventos;
};