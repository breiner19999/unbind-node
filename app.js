'use strict';

var express = require('express');
var app = express();
const cors = require('cors');

// Carga de rutas
var user_routes = require('./src/routes/user');

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
app.use('/payments/v0/third-parties-providers', user_routes);



module.exports = app;