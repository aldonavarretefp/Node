//Handler es un callback que se manda como argumento para una funcion
//Los Timeouts son codigo NO BLOQUEANTE
console.log("Inicio del programa");//1
setTimeout(()=>{
    console.log("Primer TimeOut");//6
},3000)
setTimeout(()=>{
    console.log("Segundo TimeOut");//3
},0)
setTimeout(()=>{
    console.log("Tercer TimeOut");//4
},0)
setTimeout(()=>{
    console.log("Cuarto TimeOut");//5
},0)

console.log("Final del programa")//2