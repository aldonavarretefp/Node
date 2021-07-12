const Tarea = require("./Tarea");

class Tareas {

    constructor(){
        this._listado = {}; //puedo poner las propiedades aqui mismo en el constructor
    }

    get listadoArr() {
        
        const listado = [];
        Object.keys(this._listado).forEach( key =>{
            listado.push(this._listado[key]);
        })
        return listado;

    }

    
    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
    
    cargarTareasFromArray(tareas = []){
        tareas.forEach(tarea=>{
            this._listado[tarea.id] = tarea;
        })
    }
    listadoCompleto(){
        console.log()
        Object.values(this._listado).forEach((tarea,i)=>{
            //Destructurando 
            const indice = `${i+1}.`.green;
            const {desc,completadoEn} = tarea;
            const estado = completadoEn
                            ? "Completado".green
                            : "Pendiente".red;

            console.log(`\t${indice} ${desc} :: ${estado}`);
            i++;
        })
    }

}

module.exports = Tareas