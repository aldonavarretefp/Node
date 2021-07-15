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
                    if (lugarId){
                        lugarSeleccionado = posiblesLugares.find(lugar => lugar.id===lugarId);
                        busquedas.agregarHistorial(lugarSeleccionado.nombre);
                        //Clima
                        const clima = await busquedas.clima(lugarSeleccionado.lat,lugarSeleccionado.long);
                        // Mostrar Resultados
                        console.log(`\n\t=======Información de la Ciudad======`.bgWhite.black);
                        console.log(`${'Ciudad:'.green}\t ${lugarSeleccionado.nombre}`.yellow);
                        console.log(`${'Lat:'.green}\t\t ${lugarSeleccionado.lat}`.yellow);
                        console.log(`${'Long:'.green}\t\t  ${lugarSeleccionado.long}`.yellow);
                        console.log(`${'Clima:'.green}\t\t  ${`${clima.desc}`.charAt(0).toUpperCase().concat(clima.desc.substring(1))}`.yellow);
                        console.log(`${'Temperatura:'.green}\t  ${Math.round(clima.temp)}°C`.yellow);
                        console.log(`${'Sensación de:'.green}\t  ${Math.round(clima.temp)}°C`.yellow);
                        console.log(`${'Temperatura min:'.green}  ${Math.round(clima.min)}°C`.yellow);
                        console.log(`${'Temperatura max:'.green}  ${Math.round(clima.max)}°C`.yellow);
                        console.log(`${'Humedad:'.green}\t ${clima.humedad}%`.yellow);
                        console.log(`${'Presion:'.green}\t ${clima.presion}hPa`.yellow);
                    }

                    break;
                case 2:
                    busquedas.historialCapitalizado.forEach((element:string,i:number) => {
                        let idx = `${i+1}.`.green;
                        console.log(`${idx} ${element}`)
                    });
                    break;
                default:
                    break;
                }
            await inquirerPausa();
        }
        
    } while (opt!==0);
};

main();
