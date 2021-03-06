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
const service = require('../config/services');
//const mailCtrl = require('../controllers/mailCtrl');


module.exports = {
  login(req, res) {
    var facebookId = req.body.facebookId;
    var token = req.body.token;
    
    if(token != null && token.trim() != '' && facebookId != null && facebookId.trim() != ''){
      return tbl_personas
      .findOne({
        where: {
          str_facebook_id: facebookId,
          str_token: token,
        },
      })
      .then((tbl_personas) => {
        if (!tbl_personas) {
          return res.status(404).send({
            code: '2',  
            message: 'ERROR: Usuario facebook o token errados',
          });
        }
        return res.status(200).send({
          tbl_personas,
          tokenSession: service.createToken(facebookId+token),
        });
      })
      .catch((error) => { res.status(400).send(error); });
    }
    else {
      var email = req.body.email.toLowerCase();
      var password = req.body.password;
      var passEncriptada = encriptar(email,password);
      return tbl_personas
      .findOne({
        where: {
          str_email: email,
          str_password: passEncriptada,
        },
      })
      .then((tbl_personas) => {
        if (!tbl_personas) {
          return res.status(404).send({
            code: '2',  
            message: 'ERROR: Usuario o constraseña errados',
          });
        }
        return res.status(200).send({
          tbl_personas,
          tokenSession: service.createToken(email+password),
        });
      })
      .catch((error) => { res.status(400).send(error); });
    }
    
  },

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
          model: tbl_pqrs,
          include: [{
              model: tbl_parametros,
              as: 'tipo_pqr'
          }],
          as: 'pqrs'
        },{
          model: tbl_parametros,
          as: 'genero'
        },{
          model: tbl_parametros,
          as: 'estado_civil'
        },{
          model: tbl_parametros,
          as: 'bebida'
        },{
          model: tbl_parametros,
          as: 'ciudad'
        },{
          model: tbl_parametros,
          as: 'tipo_id'
        }],
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
        include: [{
          model: tbl_reservas,
          as: 'reservas'
        },{
          model: tbl_generos_fav,
          as: 'generos_favoritos'
        },{
          model: tbl_pqrs,
          include: [{
              model: tbl_parametros,
              as: 'tipo_pqr'
          }],
          as: 'pqrs'
        },{
          model: tbl_parametros,
          as: 'genero'
        },{
          model: tbl_parametros,
          as: 'estado_civil'
        },{
          model: tbl_parametros,
          as: 'bebida'
        },{
          model: tbl_parametros,
          as: 'ciudad'
        },{
          model: tbl_parametros,
          as: 'tipo_id'
        }],
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
        include: [{
          model: tbl_reservas,
          as: 'reservas'
        },{
          model: tbl_generos_fav,
          as: 'generos_favoritos'
        },{
          model: tbl_pqrs,
          include: [{
              model: tbl_parametros,
              as: 'tipo_pqr'
          }],
          as: 'pqrs'
        },{
          model: tbl_parametros,
          as: 'genero'
        },{
          model: tbl_parametros,
          as: 'estado_civil'
        },{
          model: tbl_parametros,
          as: 'ciudad'
        },{
          model: tbl_parametros,
          as: 'bebida'
        },{
          model: tbl_parametros,
          as: 'tipo_id'
        }],
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

  addOne(req, res) {
    return tbl_personas
      .create({
        id_genero_sexo: req.body.id_genero_sexo,
        id_estado_civil: req.body.id_estado_civil,
        id_bebida: req.body.id_bebida,
        num_estrellas: req.body.num_estrellas,
        str_primer_nombre: req.body.str_primer_nombre.toLowerCase(),
        str_segundo_nombre: req.body.str_segundo_nombre.toLowerCase(),
        str_primer_apellido: req.body.str_primer_apellido.toLowerCase(),
        str_segundo_apellido: req.body.str_segundo_apellido.toLowerCase(),
        str_tipo_id: req.body.str_tipo_id,
        str_num_identificacion: req.body.str_num_identificacion,
        str_email: req.body.str_email.toLowerCase(),
        str_token: req.body.str_token,
        str_condiciones: req.body.str_condiciones,
        str_acepta_tart: req.body.str_acepta_tart,
        dtm_fecha_acepta_trat: req.body.dtm_fecha_acepta_trat,
        dtm_fecha_nacimiento: req.body.dtm_fecha_nacimiento,
        str_celular: req.body.str_celular,
        str_ciudad: req.body.str_ciudad,
        str_password: encriptar(req.body.str_email.toLowerCase(),(req.body.str_password!=null ? (req.body.str_password.trim()!='' ? req.body.str_password.trim() : 'passw0rd' ) : 'passw0rd')),
        str_facebook_id: req.body.str_facebook_id,
      })
      .then((tbl_personas) => res.status(201).send({
          tbl_personas,
          //notificacion: mailCtrl.enviarMail(req.body.str_primer_nombre.toLowerCase(), req.body.str_segundo_nombre.toLowerCase(), req.body.str_primer_apellido.toLowerCase(), req.body.str_segundo_apellido.toLowerCase(), req.body.str_email.toLowerCase(), req.body.str_password),
          //tokenSession: service.createToken(req.body.str_email.toLowerCase()+encriptar(req.body.str_email.toLowerCase(),(req.body.str_password.trim()!='' ? req.body.str_password.trim() : 'passw0rd' ))),
      }),
      //mailCtrl.enviarMail(req,res),
      )
      .catch((error) => res.status(400).send(msgerror(error)));
  },

  add(req, res) {
    return tbl_personas
      .create({
        id_genero_sexo: req.body.id_genero_sexo,
        id_estado_civil: req.body.id_estado_civil,
        id_bebida: req.body.id_bebida,
        num_estrellas: req.body.num_estrellas,
        str_primer_nombre: req.body.str_primer_nombre.toLowerCase(),
        str_segundo_nombre: req.body.str_segundo_nombre.toLowerCase(),
        str_primer_apellido: req.body.str_primer_apellido.toLowerCase(),
        str_segundo_apellido: req.body.str_segundo_apellido.toLowerCase(),
        str_tipo_id: req.body.str_tipo_id,
        str_num_identificacion: req.body.str_num_identificacion,
        str_email: req.body.str_email.toLowerCase(),
        str_token: req.body.str_token,
        str_condiciones: req.body.str_condiciones,
        str_acepta_tart: req.body.str_acepta_tart,
        dtm_fecha_acepta_trat: req.body.dtm_fecha_acepta_trat,
        dtm_fecha_nacimiento: req.body.dtm_fecha_nacimiento,
        str_celular: req.body.str_celular,
        str_ciudad: req.body.str_ciudad,
        str_password: encriptar(req.body.str_email.toLowerCase(),(req.body.str_password!=null ? (req.body.str_password.trim()!='' ? req.body.str_password.trim() : 'passw0rd' ) : 'passw0rd')),
        str_facebook_id: req.body.str_facebook_id,
      })
      .then((tbl_personas) => res.status(201).send({
          tbl_personas,
          //notificacion: mailCtrl.enviarMail(req.body.str_primer_nombre.toLowerCase(), req.body.str_segundo_nombre.toLowerCase(), req.body.str_primer_apellido.toLowerCase(), req.body.str_segundo_apellido.toLowerCase(), req.body.str_email.toLowerCase(), req.body.str_password),
          //tokenSession: service.createToken(req.body.str_email.toLowerCase()+encriptar(req.body.str_email.toLowerCase(),(req.body.str_password.trim()!='' ? req.body.str_password.trim() : 'passw0rd' ))),
      }),
      
      )
      .catch((error) => res.status(400).send(msgerror(error)));
  },

  update(req, res) {
    return tbl_personas
      .findById(req.params.id, {
        include: [{
          model: tbl_reservas,
          as: 'reservas'
        },{
          model: tbl_generos_fav,
          as: 'generos_favoritos'
        },{
          model: tbl_pqrs,
          include: [{
              model: tbl_parametros,
              as: 'tipo_pqr'
          }],
          as: 'pqrs'
        },{
          model: tbl_parametros,
          as: 'genero'
        },{
          model: tbl_parametros,
          as: 'ciudad'
        },{
          model: tbl_parametros,
          as: 'estado_civil'
        },{
          model: tbl_parametros,
          as: 'bebida'
        },{
          model: tbl_parametros,
          as: 'tipo_id'
        }],
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
              str_facebook_id: req.body.str_facebook_id,
              str_token: req.body.str_token,
              str_celular: req.body.str_celular,
              str_ciudad: req.body.str_ciudad,
              //str_password: encriptar(req.body.str_email.toLowerCase(),req.body.str_password),
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


  pwd(req, res) {
    let whereClause= {};  
    var filtro = req.params.filtro;
    var campos = filtro.split(',');
    var email = campos[0].split(':');
    var pwd = campos[1].split(':');
    pwd[1] =  encriptar(email[1].toLowerCase(),pwd[1]);
    whereClause[email[0]] = email[1];
    whereClause[pwd[0]] = pwd[1];

    return tbl_personas
      .findAll({
        where: whereClause,
      })
      .then(tbl_personas => {
        if (!tbl_personas || tbl_personas.length != 1 || tbl_personas.length < 1) {
          return res.status(400).send({
            code: '1',  
            message: 'ERROR: El password ingresado no corresponde al actual',
          });
        }
        for(i=0;i<tbl_personas.length;i++){
          tbl_personas[i]
            .update({
              str_password: encriptar(email[1].toLowerCase(),req.body.str_password)
            })
            .then(() => res.status(204).send())
            .catch((error) => res.status(400).send("1-ERROR: "+error));
        }
        return res.status(200).send({
            code: '0',  
            message: 'OK: Password actualizado exitosamente',
        });
      })
      .catch((error) => res.status(400).send("1-ERROR: "+error));
  },


};


function encriptar(user, pass) {
  var crypto = require('crypto');
  // usamos el metodo CreateHmac y le pasamos el parametro user y actualizamos el hash con la password
  var hmac = crypto.createHmac('sha1', user).update(pass).digest('hex');
  return hmac;
}

function msgerror(error){
  error = JSON.stringify(error);
  if(error.includes("Ya existe la llave (str_num_identificacion)"))
    return JSON.parse('{"code": "3", "message": "ERROR: El número de identificación ya se encuentra registrado"}');
  if(error.includes("str_num_identificacion must be unique"))
    return JSON.parse('{"code": "3", "message": "ERROR: El número de identificación ya se encuentra registrado"}');
  if(error.includes("Ya existe la llave (str_email)"))
    return JSON.parse('{"code": "4  ", "message": "ERROR: El correo ya se encuentra registrado"}');
  if(error.includes("str_email must be unique"))
    return JSON.parse('{"code": "4  ", "message": "ERROR: El correo ya se encuentra registrado"}');
    
  return error;
}


