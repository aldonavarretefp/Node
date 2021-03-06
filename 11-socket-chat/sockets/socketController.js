const { comprobarJWT } = require("../helpers");
const { ChatMensajes } = require("../models");

const chatMensajes = new ChatMensajes();

const socketController = async (socket,io) => {
    const usuario = await comprobarJWT(socket.handshake.headers['x-token']);

    if(!usuario){
        return socket.disconnect(); //Desconecto el servidor
    }
    // Agrega a usuario 
    chatMensajes.agregarUsuario(usuario);
    
    io.emit('usuarios-activos',chatMensajes.usuariosArr);
    socket.emit('recibir-mensajes',chatMensajes.ultimos10);

    // Una vez el cliente se conecta, meterlo a una sala especial , y que sean reconocidos
    // por su uid de mongo en este caso.
    

    socket.join(usuario.id) ; // Global, Socket.id, Usuario.id



    // Borrarlo si se desconcecta
    socket.on('disconnect', () => {
        chatMensajes.desconectarUsuario(usuario.id);
        io.emit('usuarios-activos',chatMensajes.usuariosArr);
    });

    socket.to(socket.id);
    
    socket.on('enviar-mensaje',({uid,mensaje}) => {
        // Si viene un uid es para alguien en especifico (privado)
        if(uid){
            socket.to(uid).emit('mensaje-privado',{de: usuario.nombre, mensaje});
        }else{
            chatMensajes.enviarMensaje(usuario.id,usuario.nombre,mensaje);
            io.emit('recibir-mensajes',chatMensajes.ultimos10);
        }
    });

}

module.exports = {
    socketController
}