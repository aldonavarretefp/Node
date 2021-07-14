const axios = require('axios').default;
class Busquedas {
    historial:string[] = ["madrid","San Jose"]
    
    constructor(){
        //TODO: Leer DB si existe
    }
    
    async buscarCiudad( lugar:string ):Promise<string[]>{
        //Peticion http
        try {
            const resp = await axios.get("https://api.mapbox.com/geocoding/v5/mapbox.places/M%C3%A9xico.json?access_token=pk.eyJ1IjoiYWxkb25hdmFycmV0ZSIsImEiOiJja3Izc3pxamkxNGVtMnV0Y3Qxc2JicGFrIn0.6efzyciGBBR9rAxHwnao8g&limit=5&language=es");
            console.log(resp);
            return []; //Retornar los lugares que coincidan    
        } catch (error) {
            // throw error para reventar la aplicacion
            return [];
        }
    }
    
}
export = Busquedas;
