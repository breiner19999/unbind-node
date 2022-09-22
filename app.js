'use strict';

var express = require('express');
var app = express();
const cors = require('cors');

// Carga de rutas
var user_routes = require('./routes/user');
var alumno_routes = require('./routes/alumno');
var asistencia_routes = require('./routes/asistencia');
var curso_routes = require('./routes/curso');
var observacion_routes = require('./routes/observacion');
var examen_routes = require('./routes/examen');
var horario_routes = require('./routes/horario');

// Parseo del json
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use( cors() );

//configuracion cabeceras http
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); //Permite todos los dominios
    res.header('Access-Control-Allow-Headers', 'Authorization,X-API-KEY,Origin,X-Requested-With,Content-Type,Accept,Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS,PUT,DELETE') // Metodos http
    res.header('Allow', 'GET,POST,OPTIONS,PUT,DELETE'); // Metodos http

    next(); // Sale del middleware
});

// Rutas
app.use('/escuela', user_routes);
app.use('/escuela', alumno_routes);
app.use('/escuela', asistencia_routes);
app.use('/escuela', curso_routes);
app.use('/escuela', observacion_routes);
app.use('/escuela', examen_routes);
app.use('/escuela', horario_routes);

module.exports = app;