import express ,{Application}from 'express';
import cors from 'cors';
import userRoutes from '../routes/usuario';

class Server{
    private app: Application;
    private port: string;
    private paths = {
        usuarios:'/api/usuarios'
    };

    constructor(){
        this.app = express();
        this.port = process.env.PORT || "8000";
        this.middlewares();
        this.routes();
    }

    middlewares(){
        //Cors
        this.app.use(cors({

        }));
        // Body lecture
        this.app.use(express.json());
        
        //Static folder
        this.app.use(express.static('public'));

    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }

    routes(){
        this.app.use(this.paths.usuarios,userRoutes);
    }
}
export default Server;