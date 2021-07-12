const fs = require("fs");
const { arch } = require("os");

const archivo = "./db/data.json";

const guardarDB = (data )=>{
    fs.writeFileSync(archivo,JSON.stringify(data))
}

const leerDB = ()=>{
    if(!fs.existsSync(archivo)){
        return null
    }
    const infoString = fs.readFileSync(archivo,{
        encoding: "utf-8",
    });
    const data = JSON.parse(infoString);

    return data;
}

module.exports = {
    guardarDB,
    leerDB
};