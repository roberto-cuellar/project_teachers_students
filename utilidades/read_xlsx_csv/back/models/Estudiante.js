const { Schema, model } = require("mongoose");

const EstudianteSchema = Schema({
    listId: {
        type: Number,
        required: true,
        unique: true
    },
    docType:{
        type: String,
        required: true
    },
    docNumber:{
        type: Number,
        required: true,
        unique: true
    },
    name:{
        type: String,
        required: true
    },
    state:{
        type: Boolean,
        require: true 
    }
});

module.exports = model('EstudianteSchema',UsuarioSchema);