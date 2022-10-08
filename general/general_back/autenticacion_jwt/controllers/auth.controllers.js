// Asignar tipado bàsico
const { response, request } = require('express');
const { validationResult } = require('express-validator');
const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const {generarJWT} = require('../helpers/jwt');

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
        const salt = bcrypt.genSaltSync();
        dbUser.password = bcrypt.hashSync(password,salt);

        // Generar el JWT (autenticación pasiva)

        const token = await generarJWT(dbUser.id, dbUser.name);

        // Crear usuario de BD
        await dbUser.save();

        // Generar respuesta
        return res.status(200).json({
            ok: true,
            uid: dbUser.id,
            name: name,
            token: token
        });
        
    }catch(e){
        console.log(e);
        return res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });
    }

   
    
};

const loginUsuario = async (req ,res = response)=>{ // Controlador de la ruta login usuario

    const {email,password} = req.body;


    // Verificar el login
    try{

        // Verificación de que el email exista
        // Verificación del email
        const dbUser = await Usuario.findOne({email}); // En es6 se puede obviar el nombre repetido, quedando únicamente email
        if(!dbUser){
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales no validas'
            })
        }

        // Verificación del password
        const validPassword = bcrypt.compareSync(password,dbUser.password);

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Credenciales no validas'
            })
        };

        // Generar el JWT
        const token = await generarJWT(dbUser.id, dbUser.name);

        // Respuesta del servicio
         return res.json({
            ok: true,
            uid: dbUser.id,
            name: dbUser.name,
            token
         })



    }catch(error){
        console.log(error);
        return res.status(500).json({
            ok:false,
            msg: 'Hable con el administrador'
        })
        
    }

};

const revalidarToken = async (req ,res = response)=>{ // Controlador de la ruta validarToken    

    const {uid,name} = req;
    
    const token = await generarJWT(uid, name);

    return res.json({
        ok: true,
        uid,
        name,
        token
    })
};

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
};