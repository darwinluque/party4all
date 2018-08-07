var express = require('express');
var router = express.Router();

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
const tbl_mesasController = require('../controllers').tbl_mesas;
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
const docs_db = require('../docsBD/Index.html');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'PARTY4ALL', content: 'Catalogo API' });  
});

router.get('/DocsDB', docs_db); 

router.get('/api/tbl_parametros', tbl_parametrosController.list); 
router.get('/api/tbl_parametros/:id', tbl_parametrosController.getById); 
router.post('/api/tbl_parametros', tbl_parametrosController.add); 
router.put('/api/tbl_parametros/:id', tbl_parametrosController.update); 
router.delete('/api/tbl_parametros/:id', tbl_parametrosController.delete); 
//router.post('/api/tbl_parametros/add_with_artistas', tbl_parametrosController.addWithArtistas);

router.get('/api/tbl_artista', tbl_artistaController.list); 
router.get('/api/tbl_artista/:id', tbl_artistaController.getById); 
router.post('/api/tbl_artista', tbl_artistaController.add); 
router.put('/api/tbl_artista/:id', tbl_artistaController.update); 
router.delete('/api/tbl_artista/:id', tbl_artistaController.delete); 

router.get('/api/tbl_canciones', tbl_cancionesController.list); 
router.get('/api/tbl_canciones/:id', tbl_cancionesController.getById); 
router.post('/api/tbl_canciones', tbl_cancionesController.add); 
router.put('/api/tbl_canciones/:id', tbl_cancionesController.update); 
router.delete('/api/tbl_canciones/:id', tbl_cancionesController.delete); 

router.get('/api/tbl_cartas', tbl_cartasController.list); 
router.get('/api/tbl_cartas/:id', tbl_cartasController.getById); 
router.post('/api/tbl_cartas', tbl_cartasController.add); 
router.put('/api/tbl_cartas/:id', tbl_cartasController.update); 
router.delete('/api/tbl_cartas/:id', tbl_cartasController.delete); 

router.get('/api/tbl_discotecas', tbl_discotecasController.list); 
router.get('/api/tbl_discotecas/:id', tbl_discotecasController.getById); 
router.post('/api/tbl_discotecas', tbl_discotecasController.add); 
router.put('/api/tbl_discotecas/:id', tbl_discotecasController.update); 
router.delete('/api/tbl_discotecas/:id', tbl_discotecasController.delete); 

router.get('/api/tbl_encuesta', tbl_encuestaController.list); 
router.get('/api/tbl_encuesta/:id', tbl_encuestaController.getById); 
router.post('/api/tbl_encuesta', tbl_encuestaController.add); 
router.put('/api/tbl_encuesta/:id', tbl_encuestaController.update); 
router.delete('/api/tbl_encuesta/:id', tbl_encuestaController.delete); 

router.get('/api/tbl_eventos', tbl_eventosController.list); 
router.get('/api/tbl_eventos/:id', tbl_eventosController.getById); 
router.post('/api/tbl_eventos', tbl_eventosController.add); 
router.put('/api/tbl_eventos/:id', tbl_eventosController.update); 
router.delete('/api/tbl_eventos/:id', tbl_eventosController.delete); 

router.get('/api/tbl_funcionarios', tbl_funcionariosController.list); 
router.get('/api/tbl_funcionarios/:id', tbl_funcionariosController.getById); 
router.post('/api/tbl_funcionarios', tbl_funcionariosController.add); 
router.put('/api/tbl_funcionarios/:id', tbl_funcionariosController.update); 
router.delete('/api/tbl_funcionarios/:id', tbl_funcionariosController.delete); 

router.get('/api/tbl_generos_fav', tbl_generos_favController.list); 
router.get('/api/tbl_generos_fav/:id', tbl_generos_favController.getById); 
router.post('/api/tbl_generos_fav', tbl_generos_favController.add); 
router.put('/api/tbl_generos_fav/:id', tbl_generos_favController.update); 
router.delete('/api/tbl_generos_fav/:id', tbl_generos_favController.delete); 

router.get('/api/tbl_listas', tbl_listasController.list); 
router.get('/api/tbl_listas/:id', tbl_listasController.getById); 
router.post('/api/tbl_listas', tbl_listasController.add); 
router.put('/api/tbl_listas/:id', tbl_listasController.update); 
router.delete('/api/tbl_listas/:id', tbl_listasController.delete); 

router.get('/api/tbl_mesas', tbl_mesasController.list); 
router.get('/api/tbl_mesas/:id', tbl_mesasController.getById); 
router.post('/api/tbl_mesas', tbl_mesasController.add); 
router.put('/api/tbl_mesas/:id', tbl_mesasController.update); 
router.delete('/api/tbl_mesas/:id', tbl_mesasController.delete); 

router.get('/api/tbl_pedidos', tbl_pedidosController.list); 
router.get('/api/tbl_pedidos/:id', tbl_pedidosController.getById); 
router.post('/api/tbl_pedidos', tbl_pedidosController.add); 
router.put('/api/tbl_pedidos/:id', tbl_pedidosController.update); 
router.delete('/api/tbl_pedidos/:id', tbl_pedidosController.delete); 

router.get('/api/tbl_personas', tbl_personasController.list); 
router.get('/api/tbl_personas/:id', tbl_personasController.getById); 
router.post('/api/tbl_personas', tbl_personasController.add); 
router.put('/api/tbl_personas/:id', tbl_personasController.update); 
router.delete('/api/tbl_personas/:id', tbl_personasController.delete); 

router.get('/api/tbl_personas_discos', tbl_personas_discosController.list); 
router.get('/api/tbl_personas_discos/:id', tbl_personas_discosController.getById); 
router.post('/api/tbl_personas_discos', tbl_personas_discosController.add); 
router.put('/api/tbl_personas_discos/:id', tbl_personas_discosController.update); 
router.delete('/api/tbl_personas_discos/:id', tbl_personas_discosController.delete); 

router.get('/api/tbl_pqrs', tbl_pqrsController.list); 
router.get('/api/tbl_pqrs/:id', tbl_pqrsController.getById); 
router.post('/api/tbl_pqrs', tbl_pqrsController.add); 
router.put('/api/tbl_pqrs/:id', tbl_pqrsController.update); 
router.delete('/api/tbl_pqrs/:id', tbl_pqrsController.delete); 

router.get('/api/tbl_precios_boletas', tbl_precios_boletasController.list); 
router.get('/api/tbl_precios_boletas/:id', tbl_precios_boletasController.getById); 
router.post('/api/tbl_precios_boletas', tbl_precios_boletasController.add); 
router.put('/api/tbl_precios_boletas/:id', tbl_precios_boletasController.update); 
router.delete('/api/tbl_precios_boletas/:id', tbl_precios_boletasController.delete); 

router.get('/api/tbl_productos_pedido', tbl_productos_pedidoController.list); 
router.get('/api/tbl_productos_pedido/:id', tbl_productos_pedidoController.getById); 
router.post('/api/tbl_productos_pedido', tbl_productos_pedidoController.add); 
router.put('/api/tbl_productos_pedido/:id', tbl_productos_pedidoController.update); 
router.delete('/api/tbl_productos_pedido/:id', tbl_productos_pedidoController.delete); 

router.get('/api/tbl_productos', tbl_productosController.list); 
router.get('/api/tbl_productos/:id', tbl_productosController.getById); 
router.post('/api/tbl_productos', tbl_productosController.add); 
router.put('/api/tbl_productos/:id', tbl_productosController.update); 
router.delete('/api/tbl_productos/:id', tbl_productosController.delete); 

router.get('/api/tbl_productos_carta', tbl_productos_cartaController.list); 
router.get('/api/tbl_productos_carta/:id', tbl_productos_cartaController.getById); 
router.post('/api/tbl_productos_carta', tbl_productos_cartaController.add); 
router.put('/api/tbl_productos_carta/:id', tbl_productos_cartaController.update); 
router.delete('/api/tbl_productos_carta/:id', tbl_productos_cartaController.delete); 

router.get('/api/tbl_promociones', tbl_promocionesController.list); 
router.get('/api/tbl_promociones/:id', tbl_promocionesController.getById); 
router.post('/api/tbl_promociones', tbl_promocionesController.add); 
router.put('/api/tbl_promociones/:id', tbl_promocionesController.update); 
router.delete('/api/tbl_promociones/:id', tbl_promocionesController.delete); 

router.get('/api/tbl_reservas', tbl_reservasController.list); 
router.get('/api/tbl_reservas/:id', tbl_reservasController.getById); 
router.post('/api/tbl_reservas', tbl_reservasController.add); 
router.put('/api/tbl_reservas/:id', tbl_reservasController.update); 
router.delete('/api/tbl_reservas/:id', tbl_reservasController.delete); 

router.get('/api/tbl_servicios_discoteca', tbl_servicios_discotecaController.list); 
router.get('/api/tbl_servicios_discoteca/:id', tbl_servicios_discotecaController.getById); 
router.post('/api/tbl_servicios_discoteca', tbl_servicios_discotecaController.add); 
router.put('/api/tbl_servicios_discoteca/:id', tbl_servicios_discotecaController.update); 
router.delete('/api/tbl_servicios_discoteca/:id', tbl_servicios_discotecaController.delete); 

router.get('/api/tbl_suscriptores', tbl_suscriptoresController.list); 
router.get('/api/tbl_suscriptores/:id', tbl_suscriptoresController.getById); 
router.post('/api/tbl_suscriptores', tbl_suscriptoresController.add); 
router.put('/api/tbl_suscriptores/:id', tbl_suscriptoresController.update); 
router.delete('/api/tbl_suscriptores/:id', tbl_suscriptoresController.delete); 

router.get('/api/tbl_votos_canciones', tbl_votos_cancionesController.list); 
router.get('/api/tbl_votos_canciones/:id', tbl_votos_cancionesController.getById); 
router.post('/api/tbl_votos_canciones', tbl_votos_cancionesController.add); 
router.put('/api/tbl_votos_canciones/:id', tbl_votos_cancionesController.update); 
router.delete('/api/tbl_votos_canciones/:id', tbl_votos_cancionesController.delete); 


module.exports = router;
