const axios = require('axios').default;
class Busquedas {
    historial:string[] = ["madrid","San Jose"]
    
    constructor(){
        //TODO: Leer DB si existe
    }

    get paramMapbox(){
        return {
            'access_token': "pk.eyJ1IjoiYWxkb25hdmFycmV0ZSIsImEiOiJja3Izc3pxamkxNGVtMnV0Y3Qxc2JicGFrIn0.6efzyciGBBR9rAxHwnao8g",
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
