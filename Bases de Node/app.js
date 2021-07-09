
const {crearArchivoTabla} = require("./helpers/multiplicar");

//extrayendo la base desde los argumentos en consola
//*** MALA PRACTICA ***/
console.log(process.argv);
const [,,arg3 = "base=0"] = process.argv;
const [,base] = arg3.split("=");




crearArchivoTabla(base)
    .then(nombreArchivo=>console.log(`${nombreArchivo} creado!`))
    .catch(err=>console.log(err))