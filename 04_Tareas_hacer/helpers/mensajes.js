require('colors');

const mostrarMenu = () => {
    return new Promise(resolve => {
        console.clear();

        console.log("========================".green);
        console.log(" Seleccione una opción".green);
        console.log("========================\n".green);
    
        console.log(`\t${'1.'.green} Crear Tarea`)
        console.log(`\t${'2.'.green} Listar Tarea`)
        console.log(`\t${'3.'.green} Listar Tareas Completadas`)
        console.log(`\t${'4.'.green} Listar Tareas Pendientes`)
        console.log(`\t${'5.'.green} Completar Tareas`)
        console.log(`\t${'6.'.green} Borrar Tarea`)
        console.log(`\t${'7.'.green} Salir \n`)
    
        const readline = require('readline').createInterface({
            input:process.stdin,
            ouput: process.stdout
        })
    
        readline.question("Seleccione una opcion", (opt)=>{
            readline.close();
            resolve(opt);
        });
    });
};
const pausa = ()=>{
    return new Promise(resolve=>{
        const readline = require('readline').createInterface({
            input:process.stdin,
            ouput: process.stdout
        })
    
        readline.question(`Presione ${'ENTER'.green} para continuar`, (opt)=>{
            readline.close();
        });
        resolve();
    })
}

module.exports = {
    mostrarMenu,
    pausa
}