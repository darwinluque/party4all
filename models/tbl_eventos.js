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
    // associations can be defined here
  };
  return tbl_eventos;
};