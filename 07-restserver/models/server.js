const express = require('express');
const cors = require('cors');

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

    middlewares(){
        //Directorio publico
        this.app.use(express.static('public'));
        this.app.use(cors());
    }
    routes(){
        //Endpoints:
        //Obtener info
        this.app.get('/api', (req, res)=> {
            res.json({
                msg: "get API"
            });
        })
        //Actualizando data
        this.app.put('/api', (req, res)=> {
            res.json({
                msg: "put API"
            });
        })
        //Crear nuevos recursos
        this.app.post('/api', (req, res)=> {
            res.json({
                msg: "post API"
            });
        })
        //Borrar, marcandolo nadamas
        this.app.delete('/api', (req, res)=> {
            res.json({
                msg: "delete API"
            });
        })
        this.app.patch('/api', (req, res)=> {
            res.json({
                msg: "patch API"
            });
        })
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Escuchando en http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;