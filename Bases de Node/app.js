const fs = require("fs");
const multiplicar = (base,n)=>base*n;

console.clear();
let salida = "";
const base = 3;

salida+="============\n"
salida+=`Tabla del ${base}\n`
salida+="============\n"


for (let i = 1; i < 11; i++) {
    salida += (`${base} x ${i} = ${multiplicar(base,i)}\n`);
}

const path = `./Tabla_del_${base}.txt`
fs.writeFile(path,salida,(err)=>{
    if(err) throw err;
    console.log(`${path} creada`)
})