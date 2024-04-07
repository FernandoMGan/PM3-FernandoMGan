// Archivo principal de la aplicación
const express = require('express');
const morgan = require('morgan');
const config = require('./config');

const clientes = require('./routes/clientRoutes.js');

const app = express();

// Middlewares propios
app.use(morgan('dev'));

// configuracion
app.set('port', config.app.port);

// rutas
app.use('/api/clientes',clientes)

module.exports = app;