"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opt;
    const busquedas = new Busquedas();
    do {
        opt = yield inquirerMenu();
        if (opt !== 0) {
            switch (opt) {
                case 0:
                    break;
                case 1:
                    const lugar = yield leerInput("Ciudad: ");
                    console.log(`\n\t=======Información de la Ciudad======\n`.bgWhite.black);
                    console.log(`Ciudad: `.yellow);
                    console.log(`Lat: `.yellow);
                    console.log(`Long: `.yellow);
                    console.log(`Temperatura: `.yellow);
                    console.log(`Temperatura min: `.yellow);
                    console.log(`Temperatura max: `.yellow);
                    yield inquirerPausa();
                    break;
                case 2:
                    break;
                default:
                    break;
                    yield inquirerPausa();
            }
        }
    } while (opt !== 0);
});
main();
