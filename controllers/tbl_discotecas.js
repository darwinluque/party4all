const tbl_parametros = require('../models').tbl_parametros;
const tbl_artista = require('../models').tbl_artista;
const tbl_canciones = require('../models').tbl_canciones;
const tbl_cartas = require('../models').tbl_cartas;
const tbl_discotecas = require('../models').tbl_discotecas;
const tbl_encuesta = require('../models').tbl_encuesta;
const tbl_encuesta_votos = require('../models').tbl_encuesta_votos;
const tbl_eventos = require('../models').tbl_eventos;
const tbl_funcionarios = require('../models').tbl_funcionarios;
const tbl_generos_fav = require('../models').tbl_generos_fav;
const tbl_galeria = require('../models').tbl_galeria;
const tbl_listas = require('../models').tbl_listas;
const tbl_listas_dj = require('../models').tbl_listas_dj;
const tbl_mesas = require('../models').tbl_mesas;
const tbl_metodos_pagos = require('../models').tbl_metodos_pagos;
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
    return tbl_discotecas
      .findAll({
        include:[
          {
            model: tbl_promociones,
            as: 'promociones'
          },{
            model: tbl_cartas,
            as: 'carta'
          },{
            model: tbl_listas_dj, 
            as: 'lista_dj'
          },/*{
            model: tbl_reservas,
            as: 'reservas',
          },{
            model: tbl_listas,
            as: 'lista_peticiones'
          },{
            model: tbl_eventos,
            as: 'eventos'
          },*/{
            model: tbl_galeria,
            as: 'galeria'
          },{
            model: tbl_servicios_discoteca,
            include: [{
              model: tbl_parametros,
              as: 'servicio'
            }],
            as: 'servicios'
          },{
            model: tbl_funcionarios,
            as: 'funcionarios'
          },{
            model: tbl_metodos_pagos,
            include: [{
              model: tbl_parametros,
              as: 'metodo_pago'
            }],
            as: 'metodos_pago'
          },{
            model: tbl_encuesta,
            include: [{
              model: tbl_encuesta_votos,
              include: [{
                model: tbl_artista,
                as: 'artistas'
              }],
              as: 'votos'
            }],
            as: 'encuestas'
          },{
            model: tbl_parametros,
            as: 'vestuario'
          },{
            model: tbl_parametros,
            as: 'zona'
          },{
            model: tbl_parametros,
            as: 'genero_musical'
          },{
            model: tbl_parametros,
            as: 'tipo_rumba'
          }],/*{
            model: tbl_productos,
            as: 'productos'
          },{
            model: tbl_productos_pedido,
            as: 'productos_pedido'
          },{
            model: tbl_mesas,
            as: 'mesas'
          },{
            model: tbl_suscriptores,
            as: 'suscriptores'
          },{
            model: tbl_personas_discoteca,
            as: 'personas_disco'
          },{
            model: tbl_pqrs,
            as: 'pqrs'
          },{
            model: tbl_cartas,
            as: 'cartas'
          }], */
        order: [
          ['str_nombre', 'DESC'],
          //[{ model: tbl_discotecas, as: 'vestuarios' }, 'createdAt', 'DESC'],
        ],
      })
      .then((tbl_discotecas) => res.status(200).send(tbl_discotecas))
      .catch((error) => { res.status(400).send(error); });
  },

  getById(req, res) {
    return tbl_discotecas
      .findById(req.params.id, {
        include:[
          {
            model: tbl_promociones,
            as: 'promociones'
          },{
            model: tbl_cartas,
            as: 'carta'
          },{
            model: tbl_listas_dj,
            as: 'lista_dj'
          },/*{
            model: tbl_reservas,
            as: 'reservas',
          },{
            model: tbl_listas,
            as: 'lista_peticiones'
          },{
            model: tbl_eventos,
            as: 'eventos'
          },*/{
            model: tbl_galeria,
            as: 'galeria'
          },{
            model: tbl_servicios_discoteca,
            as: 'servicios'
          },{
            model: tbl_funcionarios,
            as: 'funcionarios'
          },{
            model: tbl_metodos_pagos,
            include: [{
              model: tbl_parametros,
              as: 'metodo_pago'
            }],
            as: 'metodos_pago'
          },{
            model: tbl_encuesta,
            include: [{
              model: tbl_encuesta_votos,
              include: [{
                model: tbl_artista,
                as: 'artistas'
              }],
              as: 'votos'
            }],
            as: 'encuestas'
          },{
            model: tbl_parametros,
            as: 'vestuario'
          },{
            model: tbl_parametros,
            as: 'zona'
          },{
            model: tbl_parametros,
            as: 'genero_musical'
          },{
            model: tbl_parametros,
            as: 'tipo_rumba'
          }],
      })
      .then((tbl_discotecas) => {
        if (!tbl_discotecas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_discotecas);
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

    return tbl_discotecas
      .findAll( {
        include:[
          {
            model: tbl_promociones,
            as: 'promociones'
          },{
            model: tbl_cartas,
            as: 'carta'
          },{
            model: tbl_listas_dj,
            as: 'lista_dj'
          },/*{
            model: tbl_reservas,
            as: 'reservas',
          },{
            model: tbl_listas,
            as: 'lista_peticiones'
          },{
            model: tbl_eventos,
            as: 'eventos'
          },*/{
            model: tbl_galeria,
            as: 'galeria'
          },{
            model: tbl_servicios_discoteca,
            as: 'servicios'
          },{
            model: tbl_funcionarios,
            as: 'funcionarios'
          },{
            model: tbl_metodos_pagos,
            include: [{
              model: tbl_parametros,
              as: 'metodo_pago'
            }],
            as: 'metodos_pago'
          },{
            model: tbl_encuesta,
            include: [{
              model: tbl_encuesta_votos,
              include: [{
                model: tbl_artista,
                as: 'artistas'
              }],
              as: 'votos'
            }],
            as: 'encuestas'
          },{
            model: tbl_parametros,
            as: 'vestuario'
          },{
            model: tbl_parametros,
            as: 'zona'
          },{
            model: tbl_parametros,
            as: 'genero_musical'
          },{
            model: tbl_parametros,
            as: 'tipo_rumba'
          }],
        where: whereClause,
      })
      .then((tbl_discotecas) => {
        if (!tbl_discotecas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(tbl_discotecas);
      })
      .catch((error) => { res.status(400).send(error); });
  },

  add(req, res) {
    return tbl_discotecas
      .create({
        id_vestuario: req.body.id_vestuario,
        id_zona: req.body.id_zona,
        id_genero: req.body.id_genero,
        id_tipo_rumba: req.body.id_tipo_rumba,
        str_nombre: req.body.str_nombre,
        num_estrellas: req.body.num_estrellas,
        str_rango_precios: req.body.str_rango_precios,
        str_num_telefono: req.body.str_num_telefono,
        str_direccion: req.body.str_direccion,
        str_barrio: req.body.str_barrio,
        str_num_celular: req.body.str_num_celular,
        str_url_ubicacion: req.body.str_url_ubicacion,
        str_horarios: req.body.str_horarios,
        str_telefono_reserva: req.body.str_telefono_reserva,
        str_identificacion: req.body.str_identificacion,
        str_estado: req.body.str_estado,
        num_cupo_reservas: req.body.num_cupo_reservas,
        str_geolocalizacion: req.body.str_geolocalizacion,
        str_logo: req.body.str_logo,  
        str_url_instagram: req.body.str_url_instagram,  
        str_url_facebook: req.body.str_url_facebook,  
        str_url_twitter: req.body.str_url_twitter,
        str_tyc_reservas: req.body.str_tyc_reservas,
        str_nombre_contacto: req.body.str_nombre_contacto,
      })
      .then((tbl_discotecas) => res.status(201).send(tbl_discotecas))
      .catch((error) => res.status(400).send(error));
  },

  addWithListas(req, res) {
    var rlista = JSON.parse('{"id_discoteca": "' +req.body.id_discoteca+'"}');
    var rlista_dj = JSON.parse('{"id_discoteca": "' +req.body.id_discoteca+'"}');
    return tbl_discotecas
      .create({
        id_vestuario: req.body.id_vestuario,
        id_zona: req.body.id_zona,
        id_genero: req.body.id_genero,
        id_tipo_rumba: req.body.id_tipo_rumba,
        str_nombre: req.body.str_nombre,
        num_estrellas: req.body.num_estrellas,
        str_rango_precios: req.body.str_rango_precios,
        str_num_telefono: req.body.str_num_telefono,
        str_direccion: req.body.str_direccion,
        str_barrio: req.body.str_barrio,
        str_num_celular: req.body.str_num_celular,
        str_url_ubicacion: req.body.str_url_ubicacion,
        str_horarios: req.body.str_horarios,
        str_telefono_reserva: req.body.str_telefono_reserva,
        str_identificacion: req.body.str_identificacion,
        str_estado: req.body.str_estado,
        num_cupo_reservas: req.body.num_cupo_reservas,
        lista: rlista,
        lista_dj: rlista_dj,
        str_geolocalizacion: req.body.str_geolocalizacion,
        str_logo: req.body.str_logo, 
        str_url_instagram: req.body.str_url_instagram,  
        str_url_facebook: req.body.str_url_facebook,  
        str_url_twitter: req.body.str_url_twitter,
        str_tyc_reservas: req.body.str_tyc_reservas,
        str_nombre_contacto: req.body.str_nombre_contacto,
      }, {
        include: [{
          model: tbl_listas,
          as: 'lista',
        },{
          model: tbl_listas_dj,
          as: 'lista_dj'
        }]
      })
      .then((lecturer) => res.status(201).send(lecturer))
      .catch((error) => res.status(400).send(error));
  },

  
  update(req, res) {
    return tbl_discotecas
      .findById(req.params.id, {
        include:[
          {
            model: tbl_promociones,
            as: 'promociones'
          },{
            model: tbl_listas_dj,
            as: 'lista_dj'
          },/*{
            model: tbl_reservas,
            as: 'reservas',
          },{
            model: tbl_listas,
            as: 'lista_peticiones'
          },{
            model: tbl_eventos,
            as: 'eventos'
          },*/{
            model: tbl_galeria,
            as: 'galeria'
          },{
            model: tbl_servicios_discoteca,
            as: 'servicios'
          },{
            model: tbl_funcionarios,
            include: [{
              model: tbl_parametros,
              as: 'rol'
            }],
            as: 'funcionarios'
          },{
            model: tbl_metodos_pagos,
            include: [{
              model: tbl_parametros,
              as: 'metodo_pago'
            }],
            as: 'metodos_pago'
          },{
            model: tbl_encuesta,
            include: [{
              model: tbl_encuesta_votos,
              include: [{
                model: tbl_artista,
                as: 'artistas'
              }],
              as: 'votos'
            }],
            as: 'encuestas'
          },{
            model: tbl_parametros,
            as: 'vestuario'
          },{
            model: tbl_parametros,
            as: 'zona'
          },{
            model: tbl_parametros,
            as: 'genero_musical'
          },{
            model: tbl_parametros,
            as: 'tipo_rumba'
          }],
      })
      .then(tbl_discotecas => {
        if (!tbl_discotecas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return tbl_discotecas
          .update({
            id_vestuario: req.body.id_vestuario,
            id_zona: req.body.id_zona,
            id_genero: req.body.id_genero,
            id_tipo_rumba: req.body.id_tipo_rumba,
            str_nombre: req.body.str_nombre,
            num_estrellas: req.body.num_estrellas,
            str_rango_precios: req.body.str_rango_precios,
            str_num_telefono: req.body.str_num_telefono,
            str_direccion: req.body.str_direccion,
            str_barrio: req.body.str_barrio,
            str_num_celular: req.body.str_num_celular,
            str_url_ubicacion: req.body.str_url_ubicacion,
            str_horarios: req.body.str_horarios,
            str_telefono_reserva: req.body.str_telefono_reserva,
            str_identificacion: req.body.str_identificacion,
            str_estado: req.body.str_estado,
            num_cupo_reservas: req.body.num_cupo_reservas,
            str_geolocalizacion: req.body.str_geolocalizacion,
            str_logo: req.body.str_logo, 
            str_url_instagram: req.body.str_url_instagram,  
            str_url_facebook: req.body.str_url_facebook,  
            str_url_twitter: req.body.str_url_twitter,
            str_tyc_reservas: req.body.str_tyc_reservas,
            str_nombre_contacto: req.body.str_nombre_contacto,
          })
          .then(() => res.status(200).send(tbl_discotecas))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  delete(req, res) {
    return tbl_discotecas
      .findById(req.params.id)
      .then(tbl_discotecas => {
        if (!tbl_discotecas) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        tbl_discotecas
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


