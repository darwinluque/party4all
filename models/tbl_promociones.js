'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_promociones = sequelize.define('tbl_promociones', {
    id_discoteca: DataTypes.STRING,
    str_titulo: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    vlr_porcentaje: DataTypes.DECIMAL,
    str_url_imagen: DataTypes.STRING,
    dtm_fecha_promocion: DataTypes.DATE
  }, {});
  tbl_promociones.associate = function(models) {
    // associations can be defined here
  };
  return tbl_promociones;
};