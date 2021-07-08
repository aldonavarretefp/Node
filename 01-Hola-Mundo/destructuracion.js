const deadpool = {
    nombre:"Wade",
    apellido:"Winston",
    poder:"Regeneracion",
    edad:45,
    getNombre(){
        return `${this.nombre} ${this.apellido}`
    }
}
//Queremos evitar esto
// const nombre = deadpool.nombre;
// const apellido = deadpool.apellido;
// const poder = deadpool.poder;
// console.log(nombre)
// console.log(apellido)
// console.log(poder)

//Y mejor hacer esto
// const {nombre,apellido,poder,getNombre,edad} = deadpool;
// console.log(nombre)
// console.log(apellido)
// console.log(poder)
// console.log(edad)
// console.log(getNombre())

//Esto me sirve para React
// function imprimeHeroe({nombre,apellido,poder,getNombre,edad}){
//     console.log(nombre,apellido,poder,getNombre(),edad);
// }
// imprimeHeroe(deadpool);

// // Destructuracion para arreglos
// const heroes = ["Deadpool","Batman","Superman"];
// const[,,h3] = heroes; //const [h1,h2,h3] = heroes
// console.log(h3)