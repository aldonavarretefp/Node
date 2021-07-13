const Tarea = require("./Tarea");

class Tareas {

    //Constructor
    constructor(){
        this._listado = {}; //puedo poner las propiedades aqui mismo en el constructor
    }
    //Metodos
    get listadoArr() {
        
        const listado = [];
        Object.keys(this._listado).forEach( key =>{
            listado.push(this._listado[key]);
        })
        return listado;

    }

    borrarTarea(id = ''){
        if(this._listado[id]){
            delete this._listado[id];
        }
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
        });
    }

    listarTareas(completadas = true){
        console.log(); //Salto de linea
        let indice = 0;
        (completadas)
        ?
            Object.values(this._listado).forEach((tarea)=>{
                if(tarea.completadoEn === completadas){
                    indice +=1;
                    const {desc,completadoEn} = tarea;
                    const estado = "Completada".green
                    console.log(`\t${`${indice}.`.green} ${desc} :: ${`${completadoEn}`.green}`);
    
                }
                
            })
        :
            Object.values(this._listado).forEach((tarea)=>{            
                if(tarea.completadoEn === null) {
                indice +=1;
                const {desc,completadoEn} = tarea;
                const estado = "Pendiente".red;
                console.log(`\t${`${indice}.`.green} ${desc} :: ${estado}`);
                }
            })
        
        
    }

}

module.exports = Tareas