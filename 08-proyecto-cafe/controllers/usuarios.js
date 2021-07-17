const {response} = require('express');
const bcrypt = require('bcryptjs');
const colors = require("colors");


const Usuario = require('../models/usuario');



const usuariosGet = (req, res =response)=> {
    res.json({
        msg: "get API - Controlador",
    });
}
const usuariosPost = async (req, res =response)=> {
    const {nombre,correo, password,rol,google} = req.body;
    const usuario  = new Usuario({nombre,correo,password,rol,google});

    //Encriptar password
    const salt = bcrypt.genSaltSync(10);
    usuario.password = bcrypt.hashSync(password, salt);
    //Graba en db
        await usuario.save();
    res.json({
        msg: "createdUser",
        usuario
    });
}
const usuariosPut = (req, res =response)=> {
    res.json({
        msg: "put API - Controlador"
    });
}
const usuariosPatch = (req, res =response)=> {
    res.json({
        msg: "patch API - Controlador"
    });
}
const usuariosDelete = (req, res =response)=> {
    res.json({
        msg: "delete API - Controlador"
    });
}

module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPatch,
    usuariosPut,
    usuariosDelete
}