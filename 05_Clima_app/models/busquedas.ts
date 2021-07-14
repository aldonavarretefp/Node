class Busquedas {
    historial:string[] = ["madrid","San Jose"]
    
    constructor(){
        //TODO: Leer DB si existe
    }
    
    async ciudad( lugar:string ){
        //TODO: Peticion http
        console.log(lugar);
        return []; //Retornar los lugares que coincidan
    }
    
}
export = Busquedas;
