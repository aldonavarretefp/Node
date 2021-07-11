const multiplicar = (base=1,n)=>base*n;
const fs = require("fs");



const crearArchivoTabla = async(base=0,listar,hasta) =>{
    try {
        let salida = "";
        const nombreArchivo = `./Tabla_del_${base}.txt`
    
        salida+="============\n"
        salida+=`Tabla del ${base}\n`
        salida+="============\n"
    
    
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${multiplicar(base,i)}\n`);
        }

        if(listar) console.log(salida.yellow);
        //Escribiendo el archivo
        fs.writeFileSync(nombreArchivo,salida)
        return `${nombreArchivo}`
    } catch (error) {
        throw "No se pudo completar la escritura    ";
    }
}

module.exports = {crearArchivoTabla}