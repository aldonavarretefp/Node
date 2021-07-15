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
    get paramOpenWeather(){
        return {
            appid:process.env.OPENWEATHER_KEY,
            units: "metric",
            lang:"es",
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
            // console.log(resp.data.features); //Aqui estan las posibles respuestas, vamos a mapearlas
            //TODO: id, nombre, long,lat
            
            return resp.data.features.map((ciudad:any )=> ({
                id: ciudad.id,
                nombre: ciudad.place_name_es,
                long: ciudad.center[0],
                lat:ciudad.center[1],
            }));
        } catch (error) {
            // throw error para reventar la aplicacion
            return [];
        }
    }

    async clima(lat:number,lon:number):Promise<any>{
        try {
            //Instancia de axios
            const instance = axios.create({
                baseURL: `https://api.openweathermap.org/data/2.5/weather`,
                params: {...this.paramOpenWeather,lat,lon},
                timeout: 1000,
            });
            const resp = await instance.get();
            //desc,min,max,temp
            const {weather,main}=resp.data;
            return {
                desc:weather[0].description,
                temp:main.temp,
                min:main.temp_min,
                max:main.temp_max,
                presion:main.pressure,
                humedad:main.humidity,
                seSienteComo:main.feels_like,

            }

        } catch (error) {
            return {};
        }

    }
    
}
export = Busquedas;
