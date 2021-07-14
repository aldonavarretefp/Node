const inquirer = require('inquirer');
const { validate } = require('uuid');
require('colors');

const preguntas = [
    {
        type:"list",
        name: "opt",
        message: "Selecciona la opción deseada: ",
        choices: [
            {
                value: 1,
                name:`${"1.".green} Buscar Ciudad`
            },
            {
                value: 2,
                name:`${"2.".green} Historial`
            },
            {
                value: 0,
                name:`${"0.".green} Salir`
            },
        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
    console.log("\t===============".green)
    console.log("\t   Aplicacion clima")
    console.log("\t===============".green)
    const {opt} =await inquirer.prompt(preguntas)
    return opt;

}
const inquirerPausa = async ()=>{
    console.log("\n");
    await inquirer.prompt(
        {
            type:"input",
            name: "enter",
            message: `Presiona ${"ENTER".green} para continuar`,
        }
    )
}

const leerInput = async (message = '')=>{
    const preguntas = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value){
                if(value.length === 0) return'Porfavor ingrese valor'
                else return true;
            }
        }
    ];

    const {desc} = await inquirer.prompt(preguntas);
    return desc;
}

const listarLugares = async (lugares =[]) =>{
    const choices = lugares.map((lugar,i)=>{
        let index = i+1
        return {
            value: lugar.id,
            name: `\t${`${index}.`.green} ${lugar.nombre}`
        }
    });

    choices.unshift({
        value:0,
        name: '0. '.green + "Cancelar"
    })
    
    const preguntas = [
        {
            type: "list",
            name: "id",
            message: 'Lugares: ',
            choices
        }
    ];

    const {id} = await inquirer.prompt(preguntas);
    return id;
}
const listarTareasCompletar = async (tareas =[]) =>{
    const choices = tareas.map((tarea,i)=>{
        let index = i+1
        return {
            value: tarea.id,
            name: `\t${`${index}.`.green} ${tarea.desc}`,
            checked: ( tarea.completadoEn ) ? true : false
        }
    });
    
    const preguntas = [
        {
            type: "checkbox",
            name: "ids",
            message: 'Completar: ',
            choices
        }
    ];

    const {ids} = await inquirer.prompt(preguntas);
    return ids;
}

const confirmar = async (msg= '') =>  {
    const preguntas = [
        {
            type:"confirm",
            name: "confirm",
            msg
        }
    ];
    const {confirm} = await inquirer.prompt(preguntas);
    return confirm
}

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput,
    confirmar,
    listarTareasCompletar,
    listarLugares
}