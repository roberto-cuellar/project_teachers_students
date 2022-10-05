const { response } = require("express");
const { validationResult } = require("express-validator");

const validarCampos = (req, res=response, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({
            ok: false,
            errors: errors.mapped()
        })
    };

    next(); // En caso de que no se obtengan errores, para al siguiente middleware o controller
}


module.exports = {
    validarCampos
}