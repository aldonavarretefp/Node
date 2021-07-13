require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu,inquirerPausa, leerInput} = require("./helpers/inquirer");
const Tarea = require('./models/Tarea');
const Tareas = require("./models/tareas");




console.clear();


const main = async () => {

    let opt = '';
    const tareas = new Tareas();
    const tareasDB = leerDB();
    
    if(tareasDB) tareas.cargarTareasFromArray(tareasDB);
        
    do{
        opt = await inquirerMenu();
        switch (opt) {
            case '1':
                //Crear
                const desc = await leerInput("Descripción:");
                tareas.crearTarea(desc);
            break;
            case '2':
                //Listar
                tareas.listadoCompleto();
            break;
            case '3':
                //Listar Completadas
                tareas.listarTareas(completadas=true);
            break;
            case '4':
                //Listar Pendientes
                tareas.listarTareas(completadas = false);
            break;
            default:
            break;
            }
            
            guardarDB(tareas.listadoArr);
            await inquirerPausa();

        }while(opt !== '0');
}

main();