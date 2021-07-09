const multiplicar = (base=1,n)=>base*n;

const fs = require("fs");

const crearArchivoTabla = (base) =>{
    let salida = "";
    const path = `./Tabla_del_${base}.txt`

    salida+="============\n"
    salida+=`Tabla del ${base}\n`
    salida+="============\n"


    for (let i = 1; i < 11; i++) {
        salida += (`${base} x ${i} = ${multiplicar(base,i)}\n`);
    }

    fs.writeFileSync(path,salida)
    console.log(`${path} creada`)
}

module.exports = {crearArchivoTabla}