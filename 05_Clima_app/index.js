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
                    console.log(`\n\t=======Información de la Ciudad======\n`.bgWhite.black);
                    console.log(`${'Ciudad:'.green}\t ${lugarSeleccionado.nombre}`.yellow);
                    console.log(`${'Lat:'.green}\t ${lugarSeleccionado.lat}`.yellow);
                    console.log(`${'Long:'.green}\t  ${lugarSeleccionado.long}`.yellow);
                    console.log(`${'Temperatura:'.green}\t  `.yellow);
                    console.log(`${'Temperatura min:'.green}\t`.yellow);
                    console.log(`${'Temperatura max:'.green}\t`.yellow);
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
