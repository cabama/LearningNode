/**
 *	Se trata del fichero principal o main de la aplicacion.
 */

// Introducimos los modulos que vamos a emplear:
var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var session = require('express-session'),
var mongoose = require('mongoose');
var config = require('./config/config.js');
// Inicializamos express
var app = express();

// Base de datos.
// Connect to DB
var db = config.database;
mongoose.connect(db);

// Configuramos bodyParser y Cokies.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(session({
//    secret: 'secret',
//    resave: true,
//    saveUninitialized: true
//}));

// Ruta base del proyecto para que se accesible a modulos internos.
global.__base = __dirname + '/';

// Ponemos como motor de vistas el framework EJS.
app.set('view engine', 'ejs');

// Configuramos la base de datos en fichero db.js
// var db = require('./db')

// Cargamos el fichero routers el cual dirigira segun URL.
var routers = require('./routes/rt_index.js');
app.use('/', routers);
app.use(express.static(__dirname + '/public'));

// Confguramos el puerto en el que estara disponible la appp
app.listen(8888);
