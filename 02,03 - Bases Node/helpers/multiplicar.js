const multiplicar = (base=1,n)=>base*n;
const fs = require("fs");
const colors = require("colors")


const crearArchivoTabla = async(base=0,listar,hasta) =>{
    try {
        let salida = "";
        let consola = '';
        const nombreArchivo = `Tabla_del_${base}.txt`
        const relativePath = "./salida/"
        console.log(relativePath+nombreArchivo)

        //salida
        salida+="============\n"
        salida+=`Tabla del ${base}\n`
        salida+="============\n"
        //consola
        consola+="============\n".america
        consola+=`Tabla del ${colors.red(`${base}`)}\n`
        consola+="============\n".america
        
    
    
        for (let i = 1; i <= hasta; i++) {
            salida += (`${base} x ${i} = ${multiplicar(base,i)}\n`);
            consola += (`${base} ${"x".green} ${i} ${'='.green} ${multiplicar(base,i)}\n`);
            
        }

        if(listar) console.log(consola);
        //Escribiendo el archivo
        fs.writeFileSync(relativePath+nombreArchivo,salida)
        return `${nombreArchivo}`
    } catch (error) {
        throw "No se pudo completar la escritura";
    }
}

module.exports = {crearArchivoTabla}