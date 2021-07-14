import colors from "colors"


const { leerInput, inquirerMenu, inquirerPausa } = require("./helpers/inquirer");
const Busquedas = require("./models/busquedas");

const main = async () =>{
    let opt:number;
    const busquedas = new Busquedas();

    do {
        opt = await inquirerMenu();
        if(opt!==0){
            switch (opt) {
                case 0:
                    //salir
                    break;
                case 1:
                    //Mostrar mensaje
                    const lugar:string = await leerInput("Ciudad: ");
                    //Buscar los lugares
                    //Seleccionar el lugar
                    //Clima
                    // Mostrar Resultados
                    console.log(`\n\t=======Información de la Ciudad======\n`.bgWhite.black);
                    console.log(`Ciudad: `.yellow);
                    console.log(`Lat: `.yellow);
                    console.log(`Long: `.yellow);
                    console.log(`Temperatura: `.yellow);
                    console.log(`Temperatura min: `.yellow);
                    console.log(`Temperatura max: `.yellow);
                    await inquirerPausa();
                    break;
                case 2:
                        //M
                    break;
                default:
                    break;
                await inquirerPausa();
            }
        }
        
    } while (opt!==0);
};

main();