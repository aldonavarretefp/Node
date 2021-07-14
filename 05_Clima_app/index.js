const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");

require("colors");



const main = async () =>{
    let opt;
    do {
        opt = await inquirerMenu() ;
        console.log(opt);
        await inquirerPausa();
        
    } while (opt!==0);
};

main();