const axios = require('axios').default;
class Busquedas {
    historial:string[] = ["madrid","San Jose"]
    
    constructor(){
        //TODO: Leer DB si existe
    }

    get paramMapbox(){
        return {
            'access_token': process.env.MAPBOX_KEY,
            "limit": 5,
            "language": "es"
        }
    }
    
    async buscarCiudad( lugar:string ):Promise<string[]>{
        //Peticion http
        try {
            const instance = axios.create({
                baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${lugar}.json`,
                params:this.paramMapbox,
                timeout: 1000,
            });

            const resp = await instance.get();

            console.log(resp.data);
            return []; //Retornar los lugares que coincidan    
        } catch (error) {
            // throw error para reventar la aplicacion
            return [];
        }
    }
    
}
export = Busquedas;
