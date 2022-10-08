const { response } = require("express");
const jwt = require("jsonwebtoken");

const validarJWT = (req,res=response, next)=>{
    // El token viene por header
    const token = req.header('x-token');

    if(!token){
        return res.status(401).json({
            ok:false,
            msn: "error en el token"
        })
    }

    try{
        const {uid, name} = jwt.verify( token, process.env.SECRET_JWT_SEED );
        // Se debe enviar al controlador para realizar el proceso de respuesta
        // Se modifica la request, ya que llega al controlador tal y como sale de este punto
        // Se establece de esta forma para garantizar que esta información llegue al controlador
        req.uid = uid;
        req.name = name;
        console.log(uid, name);
        

    }catch(err){
        return res.status(401).json({
            ok:false,
            msg: "token no válido"
        })
    }


    next();
}


module.exports = {
    validarJWT
}