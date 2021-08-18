

const socketController = (socket) => {

    console.log(`Cliente ${`${socket.id} `.magenta}`+ 'conectado'.green);
    
    socket.on('disconnect',()=>{
        console.log('Cliente ' + 'desconectado'.red);
    });

    socket.on('enviar-mensaje', (payload,callback) => {
        console.log(payload);
        //Por si se quiere grabar en base de datos
        const id = 123456;
        callback( {id,fecha:new Date().getTime()} )

        socket.broadcast.emit('enviar-mensaje',payload)            
    })
}





module.exports = {
    socketController
};
