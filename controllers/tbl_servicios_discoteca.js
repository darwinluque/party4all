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
    return tbl_servicios_discoteca
      .findAll({
        /*include: [{
            model: tbl_parametros,
            as: 'servicios'
        },{
            model: tbl_discotecas,
            as: 'discotecas'
        }],*/
        order: [
          ['createdAt', 'DESC'],
          //[{ model: tbl_discotecas, as: 'vestuarios' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_servicios_discoteca) => res.status(200).send(tbl_servicios_discoteca))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return tbl_servicios_discoteca
      .findById(req.params.id, {
        /*include: [{
            model: tbl_parametros,
            as: 'servicios'
        },{
            model: tbl_discotecas,
            as: 'discotecas'
        }],*/
      })
      .then((tbl_servicios_discoteca) => {
        if (!tbl_servicios_discoteca) {
          return res.status(404).send({
            message: 'tbl_servicios_discoteca Not Found',
          });
        }
        return res.status(200).send(tbl_servicios_discoteca);
      })
      .catch((error) => res.status(400).send(error));
  },

  add(req, res) {
    return tbl_servicios_discoteca
      .create({
        id_discoteca: req.body.id_discoteca,
        id_servicio: req.body.id_servicio,
        dtm_fecha_servicio: req.body.dtm_fecha_servicio,
      })
      .then((tbl_servicios_discoteca) => res.status(201).send(tbl_servicios_discoteca))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return tbl_servicios_discoteca
      .findById(req.params.id, {
        /*include: [{
            model: tbl_parametros,
            as: 'servicios'
        },{
            model: tbl_discotecas,
            as: 'discotecas'
        }],*/
      })
      .then(tbl_servicios_discoteca => {
        if (!tbl_servicios_discoteca) {
          return res.status(404).send({
            message: 'tbl_servicios_discoteca Not Found',
          });
        }
        return tbl_servicios_discoteca
          .update({
            id_discoteca: req.body.id_discoteca,
            id_servicio: req.body.id_servicio,
            dtm_fecha_servicio: req.body.dtm_fecha_servicio,
          })
          .then(() => res.status(200).send(tbl_servicios_discoteca))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tbl_servicios_discoteca
      .findById(req.params.id)
      .then(tbl_servicios_discoteca => {
        if (!tbl_servicios_discoteca) {
          return res.status(400).send({
            message: 'tbl_servicios_discoteca Not Found',
          });
        }
        return tbl_servicios_discoteca
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};




