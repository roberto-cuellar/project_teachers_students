const { Router} = require('express');
const { check } = require('express-validator');
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth.controllers');
const { validarJWT } = require('../middlewares/validar-jwt');
const { validarCampos } = require('../middlewares/validarCampos');

const router = Router();

// Crear un nuevo usuario   (crearUsuario, loginUsuario, validarToken son los controladores de las rutas)

// ('/ruta',middleware o arreglo de middlewares, controllers)

router.post('/new',[
    check('name','El nombre es obligatorio').not().isEmpty(),
    check('email','El email es obligatorio').not().isEmpty(),
    check('email','El email no corresponde a una dirección valida').isEmail(),
    check('password','La contraseña es requerida').not().isEmpty(),
    check('password','El número de caracteres mínimos es 6 para la contraseña').isLength({min: 6}),
    validarCampos
], crearUsuario); // No se ejecuta crearUsuario(), se envía por referencia 

// Login de usuario
router.post('/',[
    check('email','El email es obligatorio').not().isEmpty(),
    check('email','El email no corresponde a una dirección valida').isEmail(),
    check('password','La contraseña es requerida').not().isEmpty(),
    check('password','El número de caracteres mínimos es 6 para la contraseña').isLength({min: 6}),
    validarCampos
], loginUsuario);

// Validar y revalidar token
router.get('/renew', validarJWT, revalidarToken);

module.exports = router;