const colors = require('colors');

const {mostrarMenu, pausa} = require("./helpers/mensajes");


console.clear();


const main = async () => {
    let opt = '';
    do{
        try {
            opt = await mostrarMenu();
            console.log({opt});
            if (opt !== '0') await pausa();
        } catch (error) {
            console.log(error)
        }
    }while(opt !== '0');
}

main();