'use strict';
module.exports = (sequelize, DataTypes) => {
  var tbl_metodos_pagos = sequelize.define('tbl_metodos_pagos', {
    id_discoteca: DataTypes.STRING,
    id_metodo: DataTypes.STRING,
  }, {});
  tbl_metodos_pagos.associate = function(models) {
    tbl_metodos_pagos.belongsTo(models.tbl_parametros, {
      foreignKey: 'id_metodo', 
      targetKey: 'str_valor',
      as: 'metodo_pago'
    });
  };
  return tbl_metodos_pagos;
};