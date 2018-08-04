'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_artista = sequelize.define('tbl_artista', {
    id_genero: DataTypes.INTEGER,
    str_nombre: DataTypes.STRING
  }, {});
  tbl_artista.associate = function(models) {
    //tbl_artista.belongsTo(models.tbl_parametros);
    /*tbl_artista.hasMany(models.tbl_canciones, {
      foreignKey: 'id_artista',
      as: 'canciones',
    });
    tbl_artista.hasMany(models.tbl_encuesta, {
      foreignKey: 'id_artista',
      as: 'encuestas',
    });
    tbl_artista.hasMany(models.tbl_eventos, {
      foreignKey: 'id_artista',
      as: 'eventos',
    });*/
  };
  return tbl_artista;
};

