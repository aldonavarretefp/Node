const express = require('express');
const cors = require('cors');
const colors = require('colors');


class Server {
    //Usualmente las propiedades se declaran en constructor
    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.server = require('http').createServer(this.app);
        this.io = require('socket.io')(this.server);

        this.usuariosPath = {}

        //Middlewares   
        this.middlewares();
        //Rutas de mi aplicacion
        this.routes();
        //Sockets
        this.sockets();

    }

    
    middlewares(){
        //CORS
        this.app.use(cors());
        //Directorio publico
        this.app.use(express.static('public'));
    }
    routes(){
        //Configurando las rutas
        // this.app.use(this.usuariosPath,require("../routes/usuarios"));
    }
    sockets(){
        this.io.on('connection',socket => {
            console.log(`Cliente ${`${socket.id} `.magenta}`+ 'conectado'.green);
            socket.on('disconnect',()=>{
                console.log('Cliente ' + 'desconectado'.red);
            });
            socket.on('enviar-mensaje', (payload) => {
                this.io.emit('enviar-mensaje',payload)            
            })
        });
    }
    listen(){
        this.server.listen(this.port,()=>{
            console.log(`Escuchando en http://localhost:${this.port}`);
        });
    }
}

module.exports = Server;