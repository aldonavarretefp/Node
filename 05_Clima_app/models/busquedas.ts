const axios = require('axios').default;
class Busquedas {
    historial:string[] = ["madrid","San Jose"]
    
    constructor(){
        //TODO: Leer DB si existe
    }
    
    async buscarCiudad( lugar:string ):Promise<string[]>{
        //Peticion http
        try {
            const resp = await axios.get("https://reqres.in/api/users?page=2");
            console.log(resp);
            return []; //Retornar los lugares que coincidan    
        } catch (error) {
            // throw error para reventar la aplicacion
            return [];
        }
    }
    
}
export = Busquedas;
