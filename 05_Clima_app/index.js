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
const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");
require("colors");
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    let opt;
    const busquedas = new Busquedas();
    do {
        opt = yield inquirerMenu();
        if (opt !== 0) {
            console.log(opt);
            yield inquirerPausa();
        }
        switch (opt) {
            case 0:
                //salir
                break;
            case 1:
                break;
            case 2:
                break;
            default:
                break;
        }
    } while (opt !== 0);
});
main();
