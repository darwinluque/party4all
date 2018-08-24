'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_eventos = sequelize.define('tbl_eventos', {
    id_discoteca: DataTypes.INTEGER,
    id_artista: DataTypes.INTEGER,
    str_titulo: DataTypes.STRING,
    dtm_fecha: DataTypes.DATE,
    str_descripcion: DataTypes.STRING,
    str_url_imagen: DataTypes.STRING
  }, {});
  tbl_eventos.associate = function(models) {
    tbl_eventos.belongsTo(models.tbl_discotecas);
    //tbl_eventos.belongsTo(models.tbl_artista);
    tbl_eventos.hasMany(models.tbl_precios_boletas, {
      foreignKey: 'id_evento',
      as: 'precios_boletas',
    });
  };
  return tbl_eventos;
};

