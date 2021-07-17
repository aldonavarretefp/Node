const Role = require("../models/role");
const Usuario = require("../models/usuario")

const esRoleValido = async (rol='')=>{
    const existeRol = await Role.findOne({rol});
    if(!existeRol){
        throw new Error(`El rol ${rol} no existe en la DB`);
    }
}
const existeEmail = async (correo='')=>{
    const existeEmail = await Usuario.findOne({correo});
    if(existeEmail)throw new Error(`${correo} ya esta registrado`) ;
}


module.exports = {
    esRoleValido,
    existeEmail
};