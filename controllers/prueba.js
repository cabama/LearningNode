var express = require("express");
var app = express();

var controlador = function () {

	this.controlador  = function (solicitud, respuesta)
	{
	    respuesta.render(__base+'views/pages/prueba',{
	      //cosa: 'Guapitos C.F.'
	    });
	};

	this.controlador_post = function (solicitud, respuesta) {
		console.log('Nueva Persona')
		console.log(solicitud.body)
	}

}


module.exports = controlador;
