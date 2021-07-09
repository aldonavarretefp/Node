const multiplicar = (base=1,n)=>base*n;

const fs = require("fs");

const crearArchivoTabla = async(base=0) =>{
    try {
        let salida = "";
        const nombreArchivo = `./Tabla_del_${base}.txt`
    
        salida+="============\n"
        salida+=`Tabla del ${base}\n`
        salida+="============\n"
    
    
        for (let i = 1; i < 11; i++) {
            salida += (`${base} x ${i} = ${multiplicar(base,i)}\n`);
        }
    
        fs.writeFileSync(nombreArchivo,salida)
        return `${nombreArchivo}`
    } catch (error) {
        throw "No se pudo completar la escritura    ";
    }
}

module.exports = {crearArchivoTabla}