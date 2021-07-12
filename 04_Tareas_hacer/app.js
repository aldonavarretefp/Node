const colors = require('colors');

const {inquirerMenu,inquirerPausa} = require("./helpers/inquirer");
// const {mostrarMenu, pausa} = require("./helpers/mensajes");


console.clear();


const main = async () => {
    let opt = '';
    do{
        opt = await inquirerMenu();
        await inquirerPausa();
    }while(opt !== '0');
}

main();