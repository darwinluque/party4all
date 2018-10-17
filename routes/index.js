const express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router();
var service = require('../config/services');

const tbl_parametrosController = require('../controllers').tbl_parametros;
const tbl_artistaController = require('../controllers').tbl_artista;
const tbl_cancionesController = require('../controllers').tbl_canciones;
const tbl_cartasController = require('../controllers').tbl_cartas;
const tbl_discotecasController = require('../controllers').tbl_discotecas;
const tbl_encuestaController = require('../controllers').tbl_encuesta;
const tbl_eventosController = require('../controllers').tbl_eventos;
const tbl_funcionariosController = require('../controllers').tbl_funcionarios;
const tbl_generos_favController = require('../controllers').tbl_generos_fav;
const tbl_listasController = require('../controllers').tbl_listas;
const tbl_listas_peticionesController = require('../controllers').tbl_listas_peticiones;
const tbl_listas_djController = require('../controllers').tbl_listas_dj;
const tbl_listas_dj_cancionesController = require('../controllers').tbl_listas_dj_canciones;
const tbl_mesasController = require('../controllers').tbl_mesas;
const tbl_mensajesController = require('../controllers').tbl_mensajes;
const tbl_pedidosController = require('../controllers').tbl_pedidos;
const tbl_personasController = require('../controllers').tbl_personas;
const tbl_personas_discosController = require('../controllers').tbl_personas_discos;
const tbl_pqrsController = require('../controllers').tbl_pqrs;
const tbl_precios_boletasController = require('../controllers').tbl_precios_boletas;
const tbl_productos_pedidoController = require('../controllers').tbl_productos_pedido;
const tbl_productosController = require('../controllers').tbl_productos;
const tbl_productos_cartaController = require('../controllers').tbl_productos_carta;
const tbl_promocionesController = require('../controllers').tbl_promociones;
const tbl_reservasController = require('../controllers').tbl_reservas;
const tbl_servicios_discotecaController = require('../controllers').tbl_servicios_discoteca;
const tbl_suscriptoresController = require('../controllers').tbl_suscriptores;
const tbl_votos_cancionesController = require('../controllers').tbl_votos_canciones;
const tbl_atencion_mesasController = require('../controllers').tbl_atencion_mesas;


const v_reservasController = require('../controllers').v_reservas;

var middleware = require('../config/middleware');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(cors());
router.use('/', function(req, res, next) {
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Methods','*');
  res.header('Access-Control-Allow-Headers', 'Origin, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, X-Response-Time, X-PINGOTHER, X-CSRF-Token');
  res.header('Access-Control-Allow-Credentials','false');
  //res.header('Access-Control-Expose-Headers', 'X-Api-Version, X-Request-Id, X-Response-Time');
  res.header('Access-Control-Max-Age', '10000');
  next();
});

//const session = require('express-session');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PARTY4ALL', content: 'Catalogo API' });  
});

//router.get('/api/tbl_parametros/all/', middleware.ensureAuthenticated, tbl_parametrosController.list); 
router.get('/api/tbl_parametros/all/', tbl_parametrosController.list); 
router.get('/api/tbl_parametros/id/:id', tbl_parametrosController.getById); 
router.get('/api/tbl_parametros/qry/:filtro', tbl_parametrosController.getFilter); 
router.post('/api/tbl_parametros', tbl_parametrosController.add); 
router.put('/api/tbl_parametros/id/:id', tbl_parametrosController.update); 
router.put('/api/tbl_parametros/up/:filtro', tbl_parametrosController.updateFilter); 
router.delete('/api/tbl_parametros/id/:id', tbl_parametrosController.delete); 
router.delete('/api/tbl_parametros/rem/:filtro', tbl_parametrosController.deleteFilter);
//router.post('/api/tbl_parametros/add_with_artistas', tbl_parametrosController.addWithArtistas);

router.get('/api/tbl_artista/all/', tbl_artistaController.list); 
router.get('/api/tbl_artista/id/:id', tbl_artistaController.getById); 
router.get('/api/tbl_artista/qry/:filtro', tbl_artistaController.getFilter); 
router.post('/api/tbl_artista', tbl_artistaController.add); 
router.put('/api/tbl_artista/:id', tbl_artistaController.update); 
router.delete('/api/tbl_artista/:id', tbl_artistaController.delete); 

router.get('/api/tbl_canciones/all/', tbl_cancionesController.list); 
router.get('/api/tbl_canciones/id/:id', tbl_cancionesController.getById); 
router.get('/api/tbl_canciones/qry/:filtro', tbl_cancionesController.getFilter); 
router.post('/api/tbl_canciones', tbl_cancionesController.add); 
router.put('/api/tbl_canciones/:id', tbl_cancionesController.update); 
router.delete('/api/tbl_canciones/:id', tbl_cancionesController.delete); 

router.get('/api/tbl_cartas/all/', tbl_cartasController.list); 
router.get('/api/tbl_cartas/id/:id', tbl_cartasController.getById); 
router.get('/api/tbl_cartas/qry/:filtro', tbl_cartasController.getFilter); 
router.post('/api/tbl_cartas', tbl_cartasController.add); 
router.put('/api/tbl_cartas/:id', tbl_cartasController.update); 
router.delete('/api/tbl_cartas/:id', tbl_cartasController.delete); 

router.get('/api/tbl_discotecas/all/', tbl_discotecasController.list); 
router.get('/api/tbl_discotecas/id/:id', tbl_discotecasController.getById); 
router.get('/api/tbl_discotecas/qry/:filtro', tbl_discotecasController.getFilter); 
router.post('/api/tbl_discotecas', tbl_discotecasController.add); 
router.post('/api/tbl_discotecas/addWithListas', tbl_discotecasController.addWithListas); 
router.put('/api/tbl_discotecas/:id', tbl_discotecasController.update); 
router.delete('/api/tbl_discotecas/:id', tbl_discotecasController.delete); 

router.get('/api/tbl_encuesta/all/', tbl_encuestaController.list); 
router.get('/api/tbl_encuesta/id/:id', tbl_encuestaController.getById); 
router.get('/api/tbl_encuesta/qry/:filtro', tbl_encuestaController.getFilter); 
router.post('/api/tbl_encuesta', tbl_encuestaController.add); 
router.put('/api/tbl_encuesta/:id', tbl_encuestaController.update); 
router.delete('/api/tbl_encuesta/:id', tbl_encuestaController.delete); 

router.get('/api/tbl_eventos/all/', tbl_eventosController.list); 
router.get('/api/tbl_eventos/id/:id', tbl_eventosController.getById); 
router.get('/api/tbl_eventos/qry/:filtro', tbl_eventosController.getFilter); 
router.post('/api/tbl_eventos', tbl_eventosController.add); 
router.put('/api/tbl_eventos/:id', tbl_eventosController.update); 
router.delete('/api/tbl_eventos/:id', tbl_eventosController.delete); 

router.get('/api/tbl_funcionarios/all/', tbl_funcionariosController.list); 
router.get('/api/tbl_funcionarios/id/:id', tbl_funcionariosController.getById); 
router.get('/api/tbl_funcionarios/qry/:filtro', tbl_funcionariosController.getFilter); 
router.post('/api/tbl_funcionarios', tbl_funcionariosController.add); 
router.put('/api/tbl_funcionarios/:id', tbl_funcionariosController.update); 
router.delete('/api/tbl_funcionarios/:id', tbl_funcionariosController.delete); 

router.get('/api/tbl_generos_fav/all/', tbl_generos_favController.list); 
router.get('/api/tbl_generos_fav/id/:id', tbl_generos_favController.getById); 
router.get('/api/tbl_generos_fav/qry/:filtro', tbl_generos_favController.getFilter); 
router.post('/api/tbl_generos_fav', tbl_generos_favController.add); 
router.put('/api/tbl_generos_fav/:id', tbl_generos_favController.update); 
router.delete('/api/tbl_generos_fav/:id', tbl_generos_favController.delete); 

router.get('/api/tbl_listas/all/', tbl_listasController.list); 
router.get('/api/tbl_listas/id/:id', tbl_listasController.getById); 
router.get('/api/tbl_listas/qry/:filtro', tbl_listasController.getFilter); 
router.post('/api/tbl_listas', tbl_listasController.add); 
router.put('/api/tbl_listas/:id', tbl_listasController.update); 
router.delete('/api/tbl_listas/:id', tbl_listasController.delete); 
router.get('/api/tbl_listas/view/:filtro', tbl_listasController.view); 

router.get('/api/tbl_listas_peticiones/all/', tbl_listas_peticionesController.list); 
router.get('/api/tbl_listas_peticiones/id/:id', tbl_listas_peticionesController.getById); 
router.get('/api/tbl_listas_peticiones/qry/:filtro', tbl_listas_peticionesController.getFilter); 
router.post('/api/tbl_listas_peticiones', tbl_listas_peticionesController.add); 
router.put('/api/tbl_listas_peticiones/:id', tbl_listas_peticionesController.update); 
router.delete('/api/tbl_listas_peticiones/:id', tbl_listas_peticionesController.delete); 

router.get('/api/tbl_listas_dj/all/', tbl_listas_djController.list); 
router.get('/api/tbl_listas_dj/id/:id', tbl_listas_djController.getById); 
router.get('/api/tbl_listas_dj/qry/:filtro', tbl_listas_djController.getFilter); 
router.post('/api/tbl_listas_dj', tbl_listas_djController.add); 
router.put('/api/tbl_listas_dj/:id', tbl_listas_djController.update); 
router.delete('/api/tbl_listas_dj/:id', tbl_listas_djController.delete); 
router.get('/api/tbl_listas_dj/view/:filtro', tbl_listas_djController.view); 

router.get('/api/tbl_listas_dj_canciones/all/', tbl_listas_dj_cancionesController.list); 
router.get('/api/tbl_listas_dj_canciones/id/:id', tbl_listas_dj_cancionesController.getById); 
router.get('/api/tbl_listas_dj_canciones/qry/:filtro', tbl_listas_dj_cancionesController.getFilter); 
router.post('/api/tbl_listas_dj_canciones', tbl_listas_dj_cancionesController.add); 
router.put('/api/tbl_listas_dj_canciones/up/:id', tbl_listas_dj_cancionesController.update); 
router.put('/api/tbl_listas_dj_canciones/upst/:id', tbl_listas_dj_cancionesController.updateEstado); 
router.put('/api/tbl_listas_dj_canciones/votar/:id', tbl_listas_dj_cancionesController.votar); 
router.post('/api/tbl_listas_dj_canciones/votar1/:filtro', tbl_listas_dj_cancionesController.votar); 
router.delete('/api/tbl_listas_dj_canciones/:id', tbl_listas_dj_cancionesController.delete); 
router.delete('/api/tbl_listas_dj_canciones/rem/:filtro', tbl_listas_dj_cancionesController.deleteAll); 
router.get('/api/tbl_listas_dj_canciones/view/:filtro', tbl_listas_dj_cancionesController.view); 

router.get('/api/tbl_mesas/all/', tbl_mesasController.list); 
router.get('/api/tbl_mesas/id/:id', tbl_mesasController.getById); 
router.get('/api/tbl_mesas/qry/:filtro', tbl_mesasController.getFilter); 
router.post('/api/tbl_mesas', tbl_mesasController.add); 
router.put('/api/tbl_mesas/:id', tbl_mesasController.update); 
router.delete('/api/tbl_mesas/:id', tbl_mesasController.delete); 

router.get('/api/tbl_mensajes/all/', tbl_mensajesController.list); 
router.get('/api/tbl_mensajes/id/:id', tbl_mensajesController.getById); 
router.get('/api/tbl_mensajes/qry/:filtro', tbl_mensajesController.getFilter); 
router.post('/api/tbl_mensajes', tbl_mensajesController.add); 
router.put('/api/tbl_mensajes/:id', tbl_mensajesController.update); 
router.delete('/api/tbl_mensajes/:id', tbl_mensajesController.delete); 

router.get('/api/tbl_pedidos/all/', tbl_pedidosController.list); 
router.get('/api/tbl_pedidos/id/:id', tbl_pedidosController.getById); 
router.get('/api/tbl_pedidos/qry/:filtro', tbl_pedidosController.getFilter); 
router.get('/api/tbl_pedidos/view/:filtro', tbl_pedidosController.view); 
router.post('/api/tbl_pedidos', tbl_pedidosController.add); 
router.put('/api/tbl_pedidos/:id', tbl_pedidosController.update); 
router.delete('/api/tbl_pedidos/:id', tbl_pedidosController.delete); 

router.post('/api/login/', tbl_personasController.login);
router.get('/api/tbl_personas/all/', tbl_personasController.list); 
router.get('/api/tbl_personas/id/:id', tbl_personasController.getById); 
router.get('/api/tbl_personas/qry/:filtro', tbl_personasController.getFilter); 
router.post('/api/tbl_personas', tbl_personasController.add); 
router.post('/api/tbl_personas/addOne/', tbl_personasController.addOne); 
router.put('/api/tbl_personas/:id', tbl_personasController.update); 
router.delete('/api/tbl_personas/:id', tbl_personasController.delete); 

router.get('/api/tbl_personas_discos/all/', tbl_personas_discosController.list); 
router.get('/api/tbl_personas_discos/id/:id', tbl_personas_discosController.getById); 
router.get('/api/tbl_personas_discos/qry/:filtro', tbl_personas_discosController.getFilter); 
router.post('/api/tbl_personas_discos', tbl_personas_discosController.add); 
router.put('/api/tbl_personas_discos/:id', tbl_personas_discosController.update); 
router.delete('/api/tbl_personas_discos/:id', tbl_personas_discosController.delete); 

router.get('/api/tbl_pqrs/all/', tbl_pqrsController.list); 
router.get('/api/tbl_pqrs/:id', tbl_pqrsController.getById); 
router.get('/api/tbl_pqrs/qry/:filtro', tbl_pqrsController.getFilter); 
router.post('/api/tbl_pqrs', tbl_pqrsController.add); 
router.put('/api/tbl_pqrs/:id', tbl_pqrsController.update); 
router.delete('/api/tbl_pqrs/:id', tbl_pqrsController.delete); 

router.get('/api/tbl_precios_boletas/all/', tbl_precios_boletasController.list); 
router.get('/api/tbl_precios_boletas/id/:id', tbl_precios_boletasController.getById); 
router.get('/api/tbl_precios_boletas/qry/:filtro', tbl_precios_boletasController.getFilter); 
router.post('/api/tbl_precios_boletas', tbl_precios_boletasController.add); 
router.put('/api/tbl_precios_boletas/:id', tbl_precios_boletasController.update); 
router.delete('/api/tbl_precios_boletas/:id', tbl_precios_boletasController.delete); 

router.get('/api/tbl_productos_pedido/all/', tbl_productos_pedidoController.list); 
router.get('/api/tbl_productos_pedido/id/:id', tbl_productos_pedidoController.getById); 
router.get('/api/tbl_productos_pedido/qry/:filtro', tbl_productos_pedidoController.getFilter); 
router.post('/api/tbl_productos_pedido', tbl_productos_pedidoController.add); 
router.put('/api/tbl_productos_pedido/:id', tbl_productos_pedidoController.update); 
router.delete('/api/tbl_productos_pedido/:id', tbl_productos_pedidoController.delete); 

router.get('/api/tbl_productos/all/', tbl_productosController.list); 
router.get('/api/tbl_productos/id/:id', tbl_productosController.getById); 
router.get('/api/tbl_productos/qry/:filtro', tbl_productosController.getFilter); 
router.post('/api/tbl_productos', tbl_productosController.add); 
router.put('/api/tbl_productos/:id', tbl_productosController.update); 
router.delete('/api/tbl_productos/:id', tbl_productosController.delete); 

router.get('/api/tbl_productos_carta/all/', tbl_productos_cartaController.list); 
router.get('/api/tbl_productos_carta/id/:id', tbl_productos_cartaController.getById); 
router.get('/api/tbl_productos_carta/qry/:filtro', tbl_productos_cartaController.getFilter); 
router.post('/api/tbl_productos_carta', tbl_productos_cartaController.add); 
router.put('/api/tbl_productos_carta/:id', tbl_productos_cartaController.update); 
router.delete('/api/tbl_productos_carta/:id', tbl_productos_cartaController.delete); 

router.get('/api/tbl_promociones/all/', tbl_promocionesController.list); 
router.get('/api/tbl_promociones/id/:id', tbl_promocionesController.getById); 
router.get('/api/tbl_promociones/qry/:filtro', tbl_promocionesController.getFilter); 
router.post('/api/tbl_promociones', tbl_promocionesController.add); 
router.put('/api/tbl_promociones/:id', tbl_promocionesController.update); 
router.delete('/api/tbl_promociones/:id', tbl_promocionesController.delete); 

router.get('/api/views/v_reservas/all/', v_reservasController.list); 
router.get('/api/views/v_reservas/qry/:filtro', v_reservasController.getFilter); 

router.get('/api/tbl_reservas/all/', tbl_reservasController.list); 
router.get('/api/tbl_reservas/id/:id', tbl_reservasController.getById); 
router.get('/api/tbl_reservas/qry/:filtro', tbl_reservasController.getFilter); 
router.post('/api/tbl_reservas', tbl_reservasController.add); 
router.put('/api/tbl_reservas/:id', tbl_reservasController.update); 
router.delete('/api/tbl_reservas/:id', tbl_reservasController.delete); 

router.get('/api/tbl_servicios_discoteca/all/', tbl_servicios_discotecaController.list); 
router.get('/api/tbl_servicios_discoteca/id/:id', tbl_servicios_discotecaController.getById); 
router.get('/api/tbl_servicios_discoteca/qry/:filtro', tbl_servicios_discotecaController.getFilter); 
router.post('/api/tbl_servicios_discoteca', tbl_servicios_discotecaController.add); 
router.put('/api/tbl_servicios_discoteca/:id', tbl_servicios_discotecaController.update); 
router.delete('/api/tbl_servicios_discoteca/:id', tbl_servicios_discotecaController.delete); 

router.get('/api/tbl_suscriptores/all/', tbl_suscriptoresController.list); 
router.get('/api/tbl_suscriptores/id/:id', tbl_suscriptoresController.getById); 
router.get('/api/tbl_suscriptores/qry/:filtro', tbl_suscriptoresController.getFilter); 
router.post('/api/tbl_suscriptores', tbl_suscriptoresController.add); 
router.put('/api/tbl_suscriptores/:id', tbl_suscriptoresController.update); 
router.delete('/api/tbl_suscriptores/:id', tbl_suscriptoresController.delete); 

router.get('/api/tbl_votos_canciones/all/', tbl_votos_cancionesController.list); 
router.get('/api/tbl_votos_canciones/id/:id', tbl_votos_cancionesController.getById); 
router.get('/api/tbl_votos_canciones/qry/:filtro', tbl_votos_cancionesController.getFilter); 
router.get('/api/tbl_votos_canciones/view/:filtro', tbl_votos_cancionesController.getFilterView); 
router.post('/api/tbl_votos_canciones', tbl_votos_cancionesController.add); 
router.put('/api/tbl_votos_canciones/:id', tbl_votos_cancionesController.update); 
router.delete('/api/tbl_votos_canciones/:id', tbl_votos_cancionesController.delete); 

router.get('/api/tbl_atencion_mesas/all/', tbl_atencion_mesasController.list); 
router.get('/api/tbl_atencion_mesas/qry/:filtro', tbl_atencion_mesasController.getFilter); 
router.post('/api/tbl_atencion_mesas', tbl_atencion_mesasController.add); 
router.put('/api/tbl_atencion_mesas/:id', tbl_atencion_mesasController.update); 
router.delete('/api/tbl_atencion_mesas/:id', tbl_atencion_mesasController.delete); 

module.exports = router;
