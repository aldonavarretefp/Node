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
        const nombreEmpleado = empleados.find((empleado) => empleado.id === id);
        nombreEmpleado
        ?resolve(nombreEmpleado.nombre)
        :reject("No se encontró empleado")
    });
}

const id = 3;


const getInfoUsuario = async (id) =>{
    try {
        const empleado = await getNombreEmpleado(id);
        const salario = await getSalario(id)
        return `El empleado es ${empleado} y su salario es ${salario}`  
    } catch (error) {
        throw error; // Al hacer esto, el error se ira al catch y no al then de la llamada
    }

}

getInfoUsuario(id)
    .then(msg => {
        console.log("Todo bien")
        console.log(msg)
    })
    .catch(err=>{
        console.log("Todo mal")
        console.log(err)
    })