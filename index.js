'use strict'

var app = require('./app');
/* var port = process.env.PORT || 8080; */
var port = 8080;

app.listen(port, function() {
  console.log('Servidor escuchando:' + port);
});