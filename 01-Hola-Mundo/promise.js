const empleados = [
    {
        id:1,
        nombre: 'Fernando'
    },
    {
        id:2,
        nombre: 'Aldo'
    },
    {
        id:3,
        nombre: 'Luis'
    },
    {
        id:4,
        nombre: 'Axel'
    }
];
const salarios = [
    {
        id:1,
        cantidad: 1200
    },
    {
        id:2,
        cantidad: 1500
    }
];

//Debo encontrar el empleado y salario con el ID asignado

const getSalario = (id) =>{
    return new Promise((resolve,reject)=>{
        //Cuerpo de la promesa
        const salario = salarios.find(e=>e.id ===id);
        (salario)
        ? resolve(salario.cantidad)
        : reject(`No existe el salario con id ${id}`);
    });
};

const getNombreEmpleado = (id) => {
    return new Promise ((resolve,reject) => {
        const nombreEmpleado = empleados.find((empleado) => empleado.id === id).nombre;
        nombreEmpleado
        ?resolve(nombreEmpleado)
        :reject("No se encontró empleado")
    });
}

const id = 2;


//Famoso CallBack Hell
// getNombreEmpleado(id)
//     .then(
//         nombreEmpleado => {
//             getSalario(id)
//             .then(
//                 salario => {
//                     console.log(`El nombre del empleado es ${nombreEmpleado}`)
//                     console.log(`El salario con id ${id} es ${salario}`)
//                 }
//             )
//             .catch(err =>console.log(err))
            
//         } 
//     )
//     .catch(err =>console.log(err))

//Promesas en cadena
let nombre;
getNombreEmpleado(id)
    .then(empleado =>{
        nombre = empleado
        return getSalario(id)
    })
    .then(salario => console.log(`El Empleado ${nombre} tiene salario de ${salario}`))
    .catch(err=>console.log(err))