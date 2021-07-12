const colors = require('colors');

const {inquirerMenu,inquirerPausa, leerInput} = require("./helpers/inquirer");
const Tarea = require('./models/Tarea');
const Tareas = require("./models/tareas");
// const {mostrarMenu, pausa} = require("./helpers/mensajes");


console.clear();


const main = async () => {

    let opt = '';
    const tareas = new Tareas();

    do{
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //Crear
                const desc = await leerInput("Descripción:");
                console.log(desc);
                tareas.crearTarea(desc);
                break;
            case '2':
                //Listar
                console.log(tareas._listado);
                break;
            default:
                break;
        }
        await inquirerPausa();
    }while(opt !== '0');
}

main();