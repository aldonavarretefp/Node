const url = (window.location.hostname.includes('localhost'))
            ? 'http://localhost:8080/api/auth/' 
            : 'https://rest-server-aldo.herokuapp.com/api/auth'
            

let usuario = null;
let socket  = null;


// Referencias HTML

const txtUid = document.querySelector("#txtUid");
const txtMensaje = document.querySelector("#txtMensaje");
const ulUsuarios = document.querySelector("#ulUsuarios");
const ulMensajes = document.querySelector("#ulMensajes");
const btnSalir = document.querySelector("#btnSalir");


const validarJWT = async() => {
    const token = localStorage.getItem('token') || '';

    if(token.length<=10) {
        window.location = 'index.html'
        throw new Error('No hay token en el servidor');
    }

    fetch(url,{headers:{"x-token": token}})
    .then(response => response.json())
    .then(({ usuario:usuarioDB, token:tokenDB }) => {
        usuario = usuarioDB;
        //Nueva vida al token en en chat
        localStorage.setItem('token', tokenDB);
        document.title = usuario.nombre;
    })
    .catch(console.log)
    await conectarSocket();

}
const conectarSocket = async () => {
    //Que se conecte
    socket = io({
        //Pagina de socket io para mandar cosas al backend
        "extraHeaders": {
            'x-token': localStorage.getItem('token')
        }
    });

    socket.on('connect',() => {
        console.log("Sockets Online");
    });
    socket.on('disconnect',() => {
        console.log("Sockets Offline");
    });
    socket.on('recibir-mensajes',() => {
        console.log("Mensaje recibido");
    });
    socket.on('usuarios-activos',() => {
        console.log("Usuarios Conectados");
    });
    socket.on('mensaje-privado',() => {
        console.log("Mensaje priv");
    });

}


const main = async (params) => {
    
    //Validar JWT
    await validarJWT();
    


}



main();



