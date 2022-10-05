// Asignar tipado bàsico
const { response } = require('express');
const { validationResult } = require('express-validator');

const crearUsuario = (req ,res = response)=>{ // Controlador de la ruta crear usuario

    const {name, email, password} = req.body;
    
    return res.json({
        ok: true,
        msg: 'Crear usuario /new'
    })
};

const loginUsuario = (req ,res = response)=>{ // Controlador de la ruta login usuario

    const {email,password} = req.body;

    return res.json({
        ok: true,
        msg: 'Login de usuario /'
    })
};

const revalidarToken = (req ,res = response)=>{ // Controlador de la ruta validarToken    
    return res.json({
        ok: true,
        msg: 'revalidar token /renew'
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};