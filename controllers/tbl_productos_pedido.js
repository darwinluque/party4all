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

const tbl_pedidosController = require('../controllers').tbl_pedidos;

module.exports = {
  list(req, res) {
    return tbl_productos_pedido
      .findAll({
        include: [{
            model: tbl_productos_carta,
            include: [{
              model: tbl_cartas,
              as: 'carta'
            },{
              model: tbl_productos,
              as: 'producto'
            }],
            as: 'productos'
        }],
        order: [
          ['createdAt', 'DESC'],
          //[{ model: tbl_discotecas, as: 'vestuarios' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_productos_pedido) => res.status(200).send(tbl_productos_pedido))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return tbl_productos_pedido
      .findById(req.params.id, {
        include: [{
            model: tbl_productos_carta,
            include: [{
              model: tbl_cartas,
              as: 'carta'
            },{
              model: tbl_productos,
              as: 'producto'
            }],
            as: 'productos'
        }],
      })
      .then((tbl_productos_pedido) => {
        if (!tbl_productos_pedido) {
          return res.status(404).send({
            message: 'tbl_productos_pedido Not Found',
          });
        }
        return res.status(200).send(tbl_productos_pedido);
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

    return tbl_productos_pedido
      .findAll( {
        include: [{
          model: tbl_productos_carta,
          include: [{
            model: tbl_cartas,
            as: 'carta'
          },{
            model: tbl_productos,
            as: 'producto'
          }],
          as: 'productos'
        }],
        where: whereClause,
      })
      .then((tbl_productos_pedido) => {
        if (!tbl_productos_pedido) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_productos_pedido);
      })
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return tbl_productos_pedido
      .create({
        id_pedido: req.body.id_pedido,
        id_carta: req.body.id_carta,
        id_producto: req.body.id_producto,
        num_cantidad: req.body.num_cantidad,
        vlr_costo: req.body.vlr_costo,        
      })
      .then((tbl_productos_pedido) => res.status(201).send(tbl_productos_pedido))
      .catch((error) => res.status(400).send(error));   
  },

  update(req, res) {
    return tbl_productos_pedido
      .findById(req.params.id, {
        include: [{
            model: tbl_productos_carta,
            include: [{
              model: tbl_cartas,
              as: 'carta'
            },{
              model: tbl_productos,
              as: 'producto'
            }],
            as: 'productos'
        }],
      })
      .then(tbl_productos_pedido => {
        if (!tbl_productos_pedido) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return tbl_productos_pedido
          .update({
            id_pedido: req.body.id_pedido,
            id_carta: req.body.id_carta,
            id_producto: req.body.id_producto,
            num_cantidad: req.body.num_cantidad,
            vlr_costo: req.body.vlr_costo,
            str_estado: req.body.str_estado,
          })
          .then(() => res.status(200).send(tbl_productos_pedido))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tbl_productos_pedido
      .findById(req.params.id)
      .then(tbl_productos_pedido => {
        if (!tbl_productos_pedido) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        tbl_productos_pedido
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

  deleteAll(req, res) {
    let whereClause= {};  
    var filtro = req.params.filtro;
    var campos = filtro.split(',');
    for(var i=0; i<campos.length; i++){
        var datos = campos[i].split(':');
        whereClause[datos[0]] = datos[1];
    }

    return tbl_productos_pedido
      .findAll({
        where: whereClause,
      })
      .then(tbl_productos_pedido => {
        if (!tbl_productos_pedido) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        for(i=0;i<tbl_productos_pedido.length;i++){
          tbl_productos_pedido[i]
            .destroy()
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send("1-ERROR: "+error));
        }
        return res.status(200).send({
            code: '0',  
            message: 'OK: Registro eliminado exitosamente',
        });
      })
      .catch((error) => res.status(400).send("1-ERROR: "+error));
  },
  
};





