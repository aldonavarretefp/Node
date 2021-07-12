const Tarea = require("./Tarea");

class Tareas {

    constructor(){
        this._listado = {}; //puedo no poner las propiedades 
    }

    crearTarea(desc = ''){
        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;
    }
}

module.exports = Tareas