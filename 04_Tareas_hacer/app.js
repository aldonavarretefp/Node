require('colors');

const { guardarDB, leerDB } = require('./helpers/guardarArchivo');
const {inquirerMenu,inquirerPausa, leerInput, listarTareasABorrar, confirmar,listarTareasCompletar} = require("./helpers/inquirer");
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
            case '5':

                //Completar Tareas
                //1.Seleccionar
                const ids = await listarTareasCompletar(tareas.listadoArr);
                //2. Completar
                if(ids.length !==0){
                    tareas.completarTareas(ids);
                }
            
            break;
            case '6':
                //Borrar Tarea 
                // 1. Listado
                const id = await listarTareasABorrar(tareas.listadoArr);
                //2. Confirmacion o cancelacion (cero)
                if (id){
                    const confirm = await confirmar("Estas seguro?"); //true o false
                    if(confirm) tareas.borrarTarea(id) ;
                    console.log("Tarea borrada exitosamente!".green);
                }
                
            break;
            default:
            break;
            }
            
            guardarDB(tareas.listadoArr);
            await inquirerPausa();

        }while(opt !== '0');
}

main();