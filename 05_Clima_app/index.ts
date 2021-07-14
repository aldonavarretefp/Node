import colors from "colors";
require('dotenv').config();


const { leerInput, inquirerMenu, inquirerPausa,listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () =>{
    console.clear();

    let opt:number;
    const busquedas = new Busquedas();
    let lugarABuscar:string;
    let posiblesLugares:any[];
    // let lugarId:number;
    let lugarSeleccionado:any;

    do {
        opt = await inquirerMenu();
        if(opt!==0){
            switch (opt) {
                case 0:
                    //salir
                    break;
                case 1:
                    //Mostrar mensaje
                    lugarABuscar = await leerInput("Ciudad: ");

                    //Buscar los lugares
                    posiblesLugares = await busquedas.buscarCiudad(lugarABuscar);

                    //Lista y Selecciona el lugar
                    const lugarId:number = await listarLugares(posiblesLugares);
                    lugarSeleccionado = posiblesLugares.find(lugar => lugar.id===lugarId);

                    //Clima
                    // Mostrar Resultados
                    console.log(`\n\t=======Información de la Ciudad======\n`.bgWhite.black);
                    console.log(`${'Ciudad:'.green}\t ${lugarSeleccionado.nombre}`.yellow);
                    console.log(`${'Lat:'.green}\t ${lugarSeleccionado.lat}`.yellow);
                    console.log(`${'Long:'.green}\t  ${lugarSeleccionado.long}`.yellow);
                    console.log(`${'Temperatura:'.green}\t  `.yellow);
                    console.log(`${'Temperatura min:'.green}\t`.yellow);
                    console.log(`${'Temperatura max:'.green}\t`.yellow);

                    break;
                case 2:
                        //M
                    break;
                default:
                    break;
                }
            await inquirerPausa();
        }
        
    } while (opt!==0);
};

main();
