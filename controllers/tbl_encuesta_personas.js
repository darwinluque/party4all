const tbl_parametros = require('../models').tbl_parametros;
const tbl_artista = require('../models').tbl_artista;
const tbl_canciones = require('../models').tbl_canciones;
const tbl_cartas = require('../models').tbl_cartas;
const tbl_discotecas = require('../models').tbl_discotecas;
const tbl_encuesta = require('../models').tbl_encuesta;
const tbl_encuesta_votos = require('../models').tbl_encuesta_votos;
const tbl_encuesta_personas = require('../models').tbl_encuesta_personas;
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
    return tbl_encuesta_personas
      .findAll({
          include: [{
            model: tbl_encuesta,
            as: 'encuesta'
          },{
            model: tbl_personas,
            as: 'persona'
          }],
        order: [
          ['createdAt', 'DESC'],
          //[{ model: tbl_discotecas, as: 'vestuarios' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_encuesta_personas) => res.status(200).send(tbl_encuesta_personas))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return tbl_encuesta_personas
      .findById(req.params.id, {
        include: [{
          model: tbl_encuesta,
          as: 'encuesta'
        },{
          model: tbl_personas,
          as: 'persona'
        }],
      })
      .then((tbl_encuesta_personas) => {
        if (!tbl_encuesta_personas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_encuesta_personas);
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

    return tbl_encuesta_personas
      .findAll( {
        include: [{
          model: tbl_encuesta,
          as: 'encuesta'
        },{
          model: tbl_personas,
          as: 'persona'
        }],
        where: whereClause,
      })
      .then((tbl_encuesta_personas) => {
        if (!tbl_encuesta_personas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_encuesta_personas);
      })
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return tbl_encuesta_personas
      .create({
        id_encuesta: req.body.id_encuesta,
        id_persona: req.body.id_persona,
      })
      .then((tbl_encuesta_personas) => res.status(201).send(tbl_encuesta_personas))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return tbl_encuesta_personas
      .findById(req.params.id, {
        include: [{
          model: tbl_encuesta,
          as: 'encuesta'
        },{
          model: tbl_personas,
          as: 'persona'
        }],
      })
      .then(tbl_encuesta_personas => {
        if (!tbl_encuesta_personas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return tbl_encuesta_personas
          .update({
            id_encuesta: req.body.id_encuesta,
            id_persona: req.body.id_persona,
          })
          .then(() => res.status(200).send(tbl_encuesta_personas))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tbl_encuesta_personas
      .findById(req.params.id)
      .then(tbl_encuesta_personas => {
        if (!tbl_encuesta_personas) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        tbl_encuesta_personas
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

};


