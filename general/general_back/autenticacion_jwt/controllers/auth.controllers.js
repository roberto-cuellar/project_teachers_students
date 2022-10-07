// Asignar tipado bàsico
const { response } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');

const crearUsuario = async(req ,res = response)=>{ // Controlador de la ruta crear usuario

    const {name, email, password} = req.body;
    

    try{
        // Verificación del email
        const usuario = await Usuario.findOne({email: email}); // En es6 se puede obviar el nombre repetido, quedando únicamente email
        //const usuario = false;

        if(usuario){
            return res.status(500).json({
                ok:false,
                msg: 'El usuario ya existe con ese email'
            });
        };

        // Crear usuario con el modelo
        const dbUser = new Usuario(req.body);

        // Hash de la contraseña


        // Generar el JWT (autenticación pasiva)

        // Crear usuario de BD
        await dbUser.save();

        // Generar respuesta
        return res.status(200).json({
            ok: true,
            uid: dbUser.id,
            name: name
        });
        
    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

   
    
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