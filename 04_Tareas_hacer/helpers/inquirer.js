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
                value: '1',
                name:`${"1.".green} Crear Tarea`
            },
            {
                value: '2',
                name:`${"2.".green} Listar Tareas`
            },
            {
                value: '3',
                name:`${"3.".green} Listar Tareas Completadas`
            },
            {
                value: '4',
                name:`${"4.".green} Listar Tareas Pendientes`
            },
            {
                value: '5',
                name:`${"5.".green} Completar Tareas`
            },
            {
                value: '6',
                name:`${"6.".green} Borrar Tarea`
            },
            {
                value: '0',
                name:`${"0.".green} Salir`
            },

        ]
    }
];

const inquirerMenu = async () => {
    console.clear();
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

const leerInput = async (message)=>{
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

module.exports = {
    inquirerMenu,
    inquirerPausa,
    leerInput
}