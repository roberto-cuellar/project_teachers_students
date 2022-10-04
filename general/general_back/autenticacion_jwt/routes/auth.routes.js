const { Router} = require('express');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controllers');

const router = Router();

// Crear un nuevo usuario   (crearUsuario, loginUsuario, validarToken son los controladores de las turas)
router.post('/new', crearUsuario); // No se ejecuta crearUsuario(), se envía por referencia 

// Login de usuario
router.post('/', loginUsuario);

// Validar y revalidar token
router.get('/renew', revalidarToken);

module.exports = router;