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

const v_reservas = require('../models').v_reservas;

module.exports = {
  list(req, res) {
    return v_reservas
      .findAll({
        attributes: ['reser_id_reserva', 'reser_id_persona', 'reser_id_discoteca', 'reser_dtm_fecha_reserva', 'reser_str_hora', 'reser_num_cantidad_personas', 'reser_str_motivo', 'reser_servicio_decoracion', 'reser_str_estado', 'per_str_primer_nombre', 'per_str_segundo_nombre', 'per_str_primer_apellido', 'per_str_segundo_apellido', 'per_str_email', 'disco_str_nombre', 'disco_str_direccion', 'disco_str_barrio', 'disco_str_num_telefono', 'disco_str_num_celular', 'disco_str_url_ubicacion', 'disco_str_telefono_reserva'],
      })
      .then((v_reservas) => res.status(200).send(v_reservas))
      .catch((error) => { res.status(400).send(error); });
  },

  getFilter(req, res) {
    let whereClause= {};  
    var filtro = req.params.filtro;
    var campos = filtro.split(',');
    for(var i=0; i<campos.length; i++){
        var datos = campos[i].split(':');
        whereClause[datos[0]] = datos[1];
    }

    return v_reservas
      .findAll({
          where: whereClause,
          attributes: ['reser_id_reserva', 'reser_id_persona', 'reser_id_discoteca', 'reser_dtm_fecha_reserva', 'reser_str_hora', 'reser_num_cantidad_personas', 'reser_str_motivo', 'reser_servicio_decoracion', 'reser_str_estado', 'per_str_primer_nombre', 'per_str_segundo_nombre', 'per_str_primer_apellido', 'per_str_segundo_apellido', 'per_str_email', 'disco_str_nombre', 'disco_str_direccion', 'disco_str_barrio', 'disco_str_num_telefono', 'disco_str_num_celular', 'disco_str_url_ubicacion', 'disco_str_telefono_reserva'],
      })
      .then((v_reservas) => {
        if (!v_reservas) {
          return res.status(404).send({
            code: '1',  
            message: 'ERROR: Registro no encontrado',
          });
        }
        return res.status(200).send(v_reservas);
      })
      .catch((error) => { res.status(400).send(error); });
  },
};

