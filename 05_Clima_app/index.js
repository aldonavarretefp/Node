"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const { leerInput, inquirerMenu, inquirerPausa, listarLugares } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
const main = async () => {
    console.clear();
    let opt;
    const busquedas = new Busquedas();
    let lugarABuscar;
    let posiblesLugares;
    let lugarSeleccionado;
    do {
        opt = await inquirerMenu();
        if (opt !== 0) {
            switch (opt) {
                case 0:
                    break;
                case 1:
                    lugarABuscar = await leerInput("Ciudad: ");
                    posiblesLugares = await busquedas.buscarCiudad(lugarABuscar);
                    const lugarId = await listarLugares(posiblesLugares);
                    lugarSeleccionado = posiblesLugares.find(lugar => lugar.id === lugarId);
                    const clima = await busquedas.clima(lugarSeleccionado.lat, lugarSeleccionado.long);
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
                    break;
                case 2:
                    break;
                default:
                    break;
            }
            await inquirerPausa();
        }
    } while (opt !== 0);
};
main();
