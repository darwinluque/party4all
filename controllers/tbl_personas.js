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
    return tbl_personas
      .findAll({
        include: [{
          model: tbl_reservas,
          as: 'reservas'
        },{
          model: tbl_generos_fav,
          as: 'generos_favoritos'
        },{
          model: tbl_parametros,
          as: 'generos'
        },{
          model: tbl_parametros,
          as: 'estado_civil'
        },{
          model: tbl_parametros,
          as: 'bebida'
        },{
          model: tbl_parametros,
          as: 'tipo_id'
        }/*,{
          model: tbl_parametros,
          as: 'condiciones'
        }*/],
        /*include: [,{
          model: tbl_suscriptores,
          as: 'suscripciones'
        },{
          model: tbl_personas_discoteca,
          as: 'personas_disco'
        },{
          model: tbl_pqrs,
          as: 'pqrs'
        },{
          model: tbl_servicios_discoteca,
          as: 'servicios_discoteca'
        },{
          model: tbl_mesas,
          as: 'mesas'
        }],*/
        order: [
          ['createdAt', 'DESC'],
          //[{ model: tbl_discotecas, as: 'vestuarios' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_personas) => res.status(200).send(tbl_personas))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return tbl_personas
      .findById(req.params.id, {
        /*include: [
          {
            model: tbl_reservas,
            as: 'reservas'
          }
        ],
        /*include: [{
          model: tbl_parametros,
          as: 'genero_sexo'
        },{
          model: tbl_parametros,
          as: 'estado_civil'
        },{
          model: tbl_parametros,
          as: 'bebida'
        },{
          model: tbl_suscriptores,
          as: 'suscripciones'
        },{
          model: tbl_reservas,
          as: 'reservas'
        },{
          model: tbl_personas_discoteca,
          as: 'personas_disco'
        },{
          model: tbl_pqrs,
          as: 'pqrs'
        },{
          model: tbl_generos_fav,
          as: 'generos_favoritos'
        },{
          model: tbl_servicios_discoteca,
          as: 'servicios_discoteca'
        },{
            model: tbl_mesas,
            as: 'mesas'
        }],*/
      })
      .then((tbl_personas) => {
        if (!tbl_personas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_personas);
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

    return tbl_personas
      .findAll( {
        /*include: [
          {
            model: tbl_reservas,
            as: 'reservas',
          }
        ],*/
        where: whereClause,
      })
      .then((tbl_personas) => {
        if (!tbl_personas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_personas);
      })
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return tbl_personas
      .create({
        id_genero_sexo: req.body.id_genero_sexo,
        id_estado_civil: req.body.id_estado_civil,
        id_bebida: req.body.id_bebida,
        num_estrellas: req.body.num_estrellas,
        str_primer_nombre: req.body.str_primer_nombre,
        str_segundo_nombre: req.body.str_segundo_nombre,
        str_primer_apellido: req.body.str_primer_apellido,
        str_segundo_apellido: req.body.str_segundo_apellido,
        str_tipo_id: req.body.str_tipo_id,
        str_num_identificacion: req.body.str_num_identificacion,
        str_email: req.body.str_email,
        str_token: req.body.str_token,
        str_condiciones: req.body.str_condiciones,
        str_acepta_tart: req.body.str_acepta_tart,
        dtm_fecha_acepta_trat: req.body.dtm_fecha_acepta_trat,
        dtm_fecha_nacimiento: req.body.dtm_fecha_nacimiento,
        //password: req.body.password
      })
      .then((tbl_personas) => res.status(201).send(tbl_personas))
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return tbl_personas
      .findById(req.params.id, {
        /*include: [
          {
            model: tbl_reservas,
            as: 'reservas',
          }
        ],
        /*include: [{
          model: tbl_parametros,
          as: 'genero_sexo'
        },{
          model: tbl_parametros,
          as: 'estado_civil'
        },{
          model: tbl_parametros,
          as: 'bebida'
        },{
          model: tbl_suscriptores,
          as: 'suscripciones'
        },{
          model: tbl_reservas,
          as: 'reservas'
        },{
          model: tbl_personas_discoteca,
          as: 'personas_disco'
        },{
          model: tbl_pqrs,
          as: 'pqrs'
        },{
          model: tbl_generos_fav,
          as: 'generos_favoritos'
        },{
          model: tbl_servicios_discoteca,
          as: 'servicios_discoteca'
        },{
            model: tbl_mesas,
            as: 'mesas'
        }],*/
      })
      .then(tbl_personas => {
        if (!tbl_personas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return tbl_personas
          .update({
            id_genero_sexo: req.body.id_genero_sexo,
            id_estado_civil: req.body.id_estado_civil,
            id_bebida: req.body.id_bebida,
            num_estrellas: req.body.num_estrellas,
            str_primer_nombre: req.body.str_primer_nombre,
            str_segundo_nombre: req.body.str_segundo_nombre,
            str_primer_apellido: req.body.str_primer_apellido,
            str_segundo_apellido: req.body.str_segundo_apellido,
            str_tipo_id: req.body.str_tipo_id,
            str_num_identificacion: req.body.str_num_identificacion,
            str_email: req.body.str_email,
            str_token: req.body.str_token,
            str_condiciones: req.body.str_condiciones,
            str_acepta_tart: req.body.str_acepta_tart,
            dtm_fecha_acepta_trat: req.body.dtm_fecha_acepta_trat,
            dtm_fecha_nacimiento: req.body.dtm_fecha_nacimiento,
            //password: req.body.password,
          })
          .then(() => res.status(200).send(tbl_personas))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tbl_personas
      .findById(req.params.id)
      .then(tbl_personas => {
        if (!tbl_personas) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        tbl_personas
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




