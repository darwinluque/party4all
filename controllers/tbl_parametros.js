const tbl_parametros = require('../models').tbl_parametros;
const tbl_artista = require('../models').tbl_artista;
const tbl_canciones = require('../models').tbl_canciones;
const tbl_cartas = require('../models').tbl_cartas;
const tbl_discotecas = require('../models').tbl_discotecas;
const tbl_encuesta = require('../models').tbl_encuesta;
const tbl_eventos = require('../models').tbl_eventos;
const tbl_funcionarios = require('../models').tbl_funcionarios;
const tbl_generos_fav = require('../models').tbl_generos_fav;
const tbl_listas = require('../models').tbl_listas;
const tbl_mesas = require('../models').tbl_mesas;
const tbl_pedidos = require('../models').tbl_pedidos;
const tbl_personas = require('../models').tbl_personas;
const tbl_personas_discoteca = require('../models').tbl_personas_discoteca;
const tbl_pqrs = require('../models').tbl_pqrs;
const tbl_precios_boletas = require('../models').tbl_precios_boletas;
const tbl_productos_pedido = require('../models').tbl_productos_pedido;
const tbl_productos = require('../models').tbl_productos;
const tbl_productos_carta = require('../models').tbl_productos_carta;
const tbl_promociones = require('../models').tbl_promociones;
const tbl_reservas = require('../models').tbl_reservas;
const tbl_servicios_discoteca = require('../models').tbl_servicios_discoteca;
const tbl_suscriptores = require('../models').tbl_suscriptores;
const tbl_votos_canciones = require('../models').tbl_votos_canciones;


module.exports = {
  list(req, res) {
    //res.header('Access-Control-Allow-Origin','*');
    //res.header('Access-Control-Allow-Methods','*');
    //res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token');
    //res.header('Access-Control-Allow-Credentials','true');
    //res.header('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
    //res.header('Access-Control-Max-Age', '1000');

    return tbl_parametros
      .findAll({
        /*include: [{
            model: tbl_artista,
            as: 'artistas'
        }],
          /*
        include: [{
            model: tbl_discotecas,
            as: 'vestuarios',
            foreignKey: 'id_vestuario'
        }],
        
        /*,{
            model: tbl_discotecas,
            as: 'zonas'
        },{
            model: tbl_discotecas,
            as: 'generos'
        },{
            model: tbl_discotecas,
            as: 'tipos_rumba'
        },{
            model: tbl_personas,
            as: 'generos_sexo'
        },{
            model: tbl_personas,
            as: 'estados_civiles'
        },{
            model: tbl_personas,
            as: 'bebidas'
        },{
            model: tbl_servicios_discoteca,
            as: 'servicios'
        },{
            model: tbl_generos_fav,
            as: 'generos_favoritos'
        },{
            model: tbl_artista,
            as: 'generos_artistas',
            foreignKey: 'id_genero'
        },{
            model: tbl_pqrs,
            as: 'tipos_pqr'
        },{
            model: tbl_funcionarios,
            as: 'roles'
        }],
        */
        order: [
          ['createdAt', 'DESC'],
          //[{ model: tbl_artista, as: 'artistas' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_parametros) => res.status(200).send(tbl_parametros))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return tbl_parametros
      .findById(req.params.id, {
        /*include: [{
            model: tbl_artista,
            as: 'artistas'
        }],
        /*
        include: [{
            model: tbl_discotecas,
            as: 'vestuarios'
          },{
            model: tbl_discotecas,
            as: 'zonas'
          },{
              model: tbl_discotecas,
              as: 'generos'
          },{
              model: tbl_discotecas,
              as: 'tipos_rumba'
          },{
              model: tbl_personas,
              as: 'generos_sexo'
          },{
              model: tbl_personas,
              as: 'estados_civiles'
          },{
              model: tbl_personas,
              as: 'bebidas'
          },{
              model: tbl_servicios_discotecateca,
              as: 'servicios'
          },{
              model: tbl_generos_fav,
              as: 'generos_favoritos'
          },{
              model: tbl_artista,
              as: 'generos_artistas'
          },{
              model: tbl_pqrs,
              as: 'tipos_pqr'
          },{
              model: tbl_funcionarios,
              as: 'roles'
          }],
          */
      })
      .then((tbl_parametros) => {
        if (!tbl_parametros) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_parametros);
      })
      .catch((error) => res.status(400).send(error));
  },

  getFilter(req, res) {
    let whereClause= {};  
    var filtro = req.params.filtro;
    var campos = filtro.split(',');
    for(var i=0; i<campos.length; i++){
        var datos = campos[i].split(':');
        whereClause[datos[0]] = datos[1];
    }

    return tbl_parametros
      .findAll( {
        // ACA VAN LOS INCLUDES PARA RELACION
        where: whereClause,
        order: [
          ['str_dominio'],
          ['str_valor'],
          //[{ model: tbl_artista, as: 'artistas' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_parametros) => {
        if (!tbl_parametros) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_parametros);
      })
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return tbl_parametros
      .create({
        str_dominio: req.body.str_dominio,
        str_valor: req.body.str_valor,
        str_descripcion: req.body.str_descripcion,
        str_estado: req.body.str_estado,
      })
      .then((tbl_parametros) => res.status(201).send(tbl_parametros))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return tbl_parametros
      .findById(req.params.id, {
      })
      .then(tbl_parametros => {
        if (!tbl_parametros) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return tbl_parametros
          .update({
            str_dominio: req.body.str_dominio,
            str_valor: req.body.str_valor,
            str_descripcion: req.body.str_descripcion,
            str_estado: req.body.str_estado,
          })
          .then(() => res.status(200).send(tbl_parametros))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  updateFilter(req, res) {
    let whereClause = {};  //condicion para actualizar
    var filtro = req.params.filtro;
    var camposUpdate = filtro.split(';');
    var campos = camposUpdate[0].split(',');
    for(var i=0; i<campos.length; i++){
        var datos = campos[i].split(':');
        whereClause[datos[0]] = datos[1];
    }

    let setClause = {}; //parametros a actualizar
    var camposSet = camposUpdate[1].split(',');
    for(var i=0; i<camposSet.length; i++){
        var datos = camposSet[i].split(':');
        setClause[datos[0]] = datos[1];
    }

    return tbl_parametros
      .findAll( {
        // ACA VAN LOS INCLUDES PARA RELACION
        where: whereClause,
      })
      .then(tbl_parametros => {
        if (!tbl_parametros) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return tbl_parametros
          .update({
            set: setClause,
            /*str_dominio: req.body.str_dominio,
            str_valor: req.body.str_valor,
            str_descripcion: req.body.str_descripcion,
            str_estado: req.body.str_estado,
            */
          })
          .then(() => res.status(200).send(tbl_parametros))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tbl_parametros
      .findById(req.params.id)
      .then(tbl_parametros => {
        if (!tbl_parametros) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        tbl_parametros
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send("1-ERROR: "+error));
        return res.status(200).send({
            code: '0',  
            message: 'OK: Registro eliminado exitosamente',
        });
      })
      .catch((error) => res.status(400).send("1-ERROR: "+error));
  },

  deleteFilter(req, res) {
    let whereClause= {};  
    var filtro = req.params.filtro;
    var campos = filtro.split(',');
    var cantidad = 0;
    for(var i=0; i<campos.length; i++){
        var datos = campos[i].split(':');
        whereClause[datos[0]] = datos[1];
    }

    return tbl_parametros
      .findAll( {
        // ACA VAN LOS INCLUDES PARA RELACION
        where: whereClause,
      })
      .then(tbl_parametros => {
        if (!tbl_parametros) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        tbl_parametros
            .destroy({
                where: whereClause,
            })  
            .then(function(rowDeleted){cantidad = rowDeleted},() => res.status(204).send())
            .catch((error) => res.status(400).send("1-ERROR: "+error));
        return res.status(200).send({
            code: '0',  
            message: 'OK: '+cantidad+'Registro eliminado exitosamente',
        });
      })
      .catch((error) => res.status(400).send("1-ERROR: "+error));
  },

  //---- ADD otras tablas
/*
  addWithArtistas(req, res) {
    return tbl_parametros
      .create({
        class_name: req.body.class_name,
        tbl_artista: req.body.artistas,
      }, {
        include: [{
          model: tbl_artista,
          as: 'artistas'
        }]
      })
      .then((tbl_parametros) => res.status(201).send(tbl_parametros))
      .catch((error) => res.status(400).send(error));
  },
  */
};

