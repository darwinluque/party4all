'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_parametros = sequelize.define('tbl_parametros', {
    str_dominio: DataTypes.STRING,
    str_descripcion: DataTypes.STRING,
    str_estado: DataTypes.STRING
  }, {});
  tbl_parametros.associate = function(models) {
    tbl_parametros.hasMany(models.tbl_artista, {
      foreignKey: 'id_genero',
      as: 'generos_artistas',
    });
    /*tbl_parametros.hasMany(models.tbl_discotecas, {
      foreignKey: 'id_vestuario',
      as: 'vestuarios',
    });
    tbl_parametros.hasMany(models.tbl_discotecas, {
      foreignKey: 'id_zona',
      as: 'zonas',
    });
    tbl_parametros.hasMany(models.tbl_discotecas, {
      foreignKey: 'id_genero',
      as: 'generos',
    });
    tbl_parametros.hasMany(models.tbl_discotecas, {
      foreignKey: 'id_tipo_rumba',
      as: 'tipos_rumba',
    });
    tbl_parametros.hasMany(models.tbl_personas, {
      foreignKey: 'id_genero_sexo',
      as: 'generos_sexo',
    });
    tbl_parametros.hasMany(models.tbl_personas, {
      foreignKey: 'id_estado_civil',
      as: 'estados_civiles',
    });
    tbl_parametros.hasMany(models.tbl_personas, {
      foreignKey: 'id_bebida',
      as: 'bebidas',
    });
    tbl_parametros.hasMany(models.tbl_servicios_discoteca, {
      foreignKey: 'id_servicios',
      as: 'servicios',
    });
    tbl_parametros.hasMany(models.tbl_generos_fav, {
      foreignKey: 'id_genero',
      as: 'generos_favoritos',
    });

    tbl_parametros.hasMany(models.tbl_pqrs, {
      foreignKey: 'id_tipo_pqr',
      as: 'tipos_pqr',
    });
    tbl_parametros.hasMany(models.tbl_funcionarios, {
      foreignKey: 'id_rol',
      as: 'roles',
    });*/
  };
  return tbl_parametros;
};

