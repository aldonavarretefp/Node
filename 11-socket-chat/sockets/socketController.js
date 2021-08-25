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

    // Borrarlo si se desconcecta
    socket.on('disconnect', () => {
        chatMensajes.desconectarUsuario(usuario.id);
        socket.emit('usuarios-activos',chatMensajes.usuariosArr);
    });
    
    socket.on('enviar-mensaje',({uid,mensaje}) => {
        chatMensajes.enviarMensaje(usuario.id,usuario.nombre,mensaje);
        io.emit('recibir-mensajes',chatMensajes.ultimos10);
    });

}

module.exports = {
    socketController
}