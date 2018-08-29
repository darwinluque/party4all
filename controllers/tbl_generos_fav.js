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
    return tbl_generos_fav
      .findAll({
        /*include: [{
            model: tbl_discotecas,
            as: 'discotecas'
        },{
            model: tbl_personas,
            as: 'personas'
        }],*/
        order: [
          ['createdAt', 'DESC'],
          //[{ model: tbl_discotecas, as: 'vestuarios' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_generos_fav) => res.status(200).send(tbl_generos_fav))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return tbl_generos_fav
      .findById(req.params.id, {
        /*include: [{
            model: tbl_discotecas,
            as: 'discotecas'
        },{
            model: tbl_personas,
            as: 'personas'
        }],*/
      })
      .then((tbl_generos_fav) => {
        if (!tbl_generos_fav) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_generos_fav);
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

    return tbl_generos_fav
      .findAll( {
        // ACA VAN LOS INCLUDES PARA RELACION
        where: whereClause,
      })
      .then((tbl_generos_fav) => {
        if (!tbl_generos_fav) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_generos_fav);
      })
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return tbl_generos_fav
      .create({
        id_discoteca: req.body.id_discoteca,
        id_rol: req.body.id_rol,
        num_votos: req.body.num_votos,
        str_primer_nombre: req.body.str_primer_nombre,
        str_segundo_nombre: req.body.str_segundo_nombre,
        str_primer_apellido: req.body.str_primer_apellido,
        str_segundo_apellido: req.body.str_segundo_apellido,
        str_email: req.body.str_email,
        str_token: req.body.str_token,
      })
      .then((tbl_generos_fav) => res.status(201).send(tbl_generos_fav))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return tbl_generos_fav
      .findById(req.params.id, {
        /*include: [{
            model: tbl_discotecas,
            as: 'discotecas'
        },{
            model: tbl_personas,
            as: 'personas'
        }],*/
      })
      .then(tbl_generos_fav => {
        if (!tbl_generos_fav) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return tbl_generos_fav
          .update({
            id_discoteca: req.body.id_discoteca,
            id_rol: req.body.id_rol,
            num_votos: req.body.num_votos,
            str_primer_nombre: req.body.str_primer_nombre,
            str_segundo_nombre: req.body.str_segundo_nombre,
            str_primer_apellido: req.body.str_primer_apellido,
            str_segundo_apellido: req.body.str_segundo_apellido,
            str_email: req.body.str_email,
            str_token: req.body.str_token,
          })
          .then(() => res.status(200).send(tbl_generos_fav))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tbl_generos_fav
      .findById(req.params.id)
      .then(tbl_generos_fav => {
        if (!tbl_generos_fav) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        tbl_generos_fav
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




