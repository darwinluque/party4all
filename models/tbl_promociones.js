'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_promociones = sequelize.define('tbl_promociones', {
    id_discoteca: DataTypes.STRING,
    str_titulo: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    vlr_porcentaje: DataTypes.DECIMAL,
    str_url_imagen: DataTypes.STRING,
    dtm_fecha_promocion: DataTypes.DATE,
    str_estado: DataTypes.STRING
  }, {});
  tbl_promociones.associate = function(models) {
    tbl_promociones.belongsTo(models.tbl_discotecas, {
      foreignKey: 'id_discoteca', 
      targetKey: 'str_identificacion',
      as: 'discotecas'
    });
  };
  return tbl_promociones;
};