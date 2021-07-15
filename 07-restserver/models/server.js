const express = require('express');

class Server {
    //Usualmente las propiedades se declaran en constructor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        //Middlewares   
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();

    }
    //Colocar middlewares
    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
        //endpoints
        this.app.get('/api', (req, res)=> {
            res.send('Hello World')
        })
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando en http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;