const { alias } = require("yargs");

const argv = require("yargs")
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption:true,
                    describe: "Es la base de la tabla de multiplicar"
                })
                .option('l',{
                    alias:'listar',
                    type:'boolean',
                    default: false,
                    describe: "Muestra la tabla en consola"
                })
                .option("t",{
                    alias: "hasta",
                    type: 'number',
                    default: 10,
                    describe: 'Limite multiplicativo'
                })
                .check((argv,options)=>{
                    if (isNaN(argv.base)) throw 'ERROR: La base debe ser un numero'.red; 
                    return true;
                })
                .argv;

module.exports = argv;