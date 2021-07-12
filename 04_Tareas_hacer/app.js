require('colors');

const { guardarDB } = require('./helpers/guardarArchivo');
const {inquirerMenu,inquirerPausa, leerInput} = require("./helpers/inquirer");
const Tarea = require('./models/Tarea');
const Tareas = require("./models/tareas");




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
                console.log(tareas.listadoArr);
                break;
            default:
                break;
        }

        guardarDB(tareas.listadoArr);

        await inquirerPausa();
    }while(opt !== '0');
}

main();