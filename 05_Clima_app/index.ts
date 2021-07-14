const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

require("colors");



const main = async () =>{
    let opt;
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();
        if(opt!==0){
            console.log(opt);   
            await inquirerPausa();
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
        
    } while (opt!==0);
};

main();