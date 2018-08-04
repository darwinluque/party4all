'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_productos = sequelize.define('tbl_productos', {
    id_discoteca: DataTypes.INTEGER,
    str_descripcion: DataTypes.STRING,
    str_tamano: DataTypes.STRING,
    str_url_imagen: DataTypes.STRING,
    vlr_precio: DataTypes.DECIMAL,
    str_activo: DataTypes.STRING
  }, {});
  tbl_productos.associate = function(models){
    /*tbl_productos.belongsTo(models.tbl_discotecas);
    tbl_productos.hasMany(models.tbl_cartas, {
      foreignKey: 'id_lista',
      as: 'cartas',
    });
    tbl_productos.hasMany(models.tbl_productos_pedido, {
      foreignKey: 'id_producto',
      as: 'productos_pedido',
    });*/
  };
  return tbl_productos;
};

