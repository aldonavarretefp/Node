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
        nombre: 1200
    },
    {
        id:2,
        nombre: 1500
    }
];

//Forma 1
const getSalario = (id,callback)=>{
    const salario = salarios.find(e=>e.id===id);
    if(salario) callback(null,salario);
    else return callback("Error al encontrar el salario");
    
}

console.log(getSalario(10,(error,salario)=>{
    if(error)console.log(error);
    else console.log(salario);
}))