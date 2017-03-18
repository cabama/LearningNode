/**
 * Este fichero crear las rutas que cuelgan de /
 * Para cada elemento nuevo se puede mandar directamente a la vista, al controlador o 
 * a otro enrutador.
 */


// Cargamos el modulo para poder utilizar el enrutador de express
var express = require('express');
var app = express();

var router = express.Router();


// PRIMERO Y CONDICION PARA ENTRAR EN EL RESTO DE PAGINAS
// ES QUE EL USUARIO TENGA LOGIN.

// Index, pagina por defecto.
router.get("/", function(solicitud, respuesta){
	// res.send("Hola Mundo"); Para mandar un hola mundo
	//respuesta.render('pages/index');
	respuesta.render('pages/login',{
		cosa: 'Guapitos C.F.'
	});
});


// Configuramos la ruta login
router.get("/login/", function(solicitud, respuesta){
	// res.send("Hola Mundo"); Para mandar un hola mundo
	respuesta.render('pages/login',{
		cosa: 'Guapitos C.F.'
	});
});


// Respuesta al POST formulario de login.
router.post("/login/", function (solicitud, respuesta) {

	var login_controlador = new (require(__base + 'controllers/login'));
	login_controlador.controlador(solicitud, respuesta);
	console.log(solicitud.body);

});

module.exports = router;