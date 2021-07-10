
const { type } = require("os");
var colors = require('colors');
const { alias, demandOption } = require("yargs");
const {crearArchivoTabla} = require("./helpers/multiplicar");
const argv = require("yargs")
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption:true
                })
                .option('l',{
                    alias:'list',
                    type:'boolean',
                    default: false
                })
                .check((argv,options)=>{
                    if (isNaN(argv.base)) throw 'ERROR: La base debe ser un numero'.red; 
                    return true;
                })
                .argv;

// console.log(process.argv)
// console.log(argv)

crearArchivoTabla(argv.base,argv.l)
                .then(nombreArchivo=>console.log(`${nombreArchivo} ha sido creado exitosamente!"`.green))
                .catch(err=>console.log(err.red))