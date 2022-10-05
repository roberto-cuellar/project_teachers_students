// Servidor
const express = require('express');
// Cross domain request
const cors = require('cors');
const { dbConnection } = require('./db/config');
// Variables de entorno
require('dotenv').config();

// Creación del servidor/aplicacion en express
const app = express();

// Base de datos
dbConnection();

// Directório público para servir la carpeta pública
app.use(express.static('public'))

// CORS // middleware
app.use( cors() );

// Lectura y parseo del body // middleware
app.use( express.json() );

// Rutas // middleware
app.use( '/api/auth',require('./routes/auth.routes'));

app.listen(process.env.PORT, () =>{
    console.log(`Servidor corriendo en puerto ${ process.env.PORT }`);    
});

