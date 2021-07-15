const fs = require("fs");

const axios = require('axios').default;

class Busquedas {
    historial:string[] = []
    dbPath:string = './db/database.json';
    
    constructor(){
        const data = this.leerDB();
        
    }
    get historialCapitalizado(){
        return this.historial.map((lugar:string)=>{
            let palabras:string[] = lugar.split(" ");
            palabras = palabras.map(p=>p.charAt(0).toUpperCase() + p.substr(1));
            return palabras.join(" ")
        });
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

    agregarHistorial(lugar:string):void{
        //prevenir duplicados
        if (this.historial.includes(lugar.toLowerCase())){
            return;
        }
        this.historial = this.historial.splice(0,5);
        this.historial.unshift(lugar.toLocaleLowerCase());
        this.guardarDB();
    
    }
    guardarDB(){
        const payload = {
            historial: this.historial
        }
        fs.writeFileSync(this.dbPath,JSON.stringify(payload))

    }
    leerDB(){
        if(!fs.existsSync(this.dbPath)){
            return null
        }
        const infoString = fs.readFileSync(this.dbPath,{
            encoding: "utf-8",
        });
        const data = JSON.parse(infoString);
    
        this.historial = data.historial;
    }
}
export = Busquedas;
