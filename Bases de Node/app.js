
const { type } = require("os");
var colors = require('colors');
const { alias, demandOption } = require("yargs");
const {crearArchivoTabla} = require("./helpers/multiplicar");
const argv = require("./config/yargs");

crearArchivoTabla(argv.base,argv.l,argv.t)
                .then(nombreArchivo=>console.log(`${nombreArchivo.rainbow} ha sido creado ${colors.green("exitosamente")}!`))
                .catch(err=>console.log(err.red))