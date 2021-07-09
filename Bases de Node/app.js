
const {crearArchivoTabla} = require("./helpers/multiplicar");


const base = 6;
crearArchivoTabla(base)
    .then(nombreArchivo=>console.log(`${nombreArchivo} creado!`))
    .catch(err=>console.log(err))