const socket = io();


//Referencias del HTML
const lblOnline  = document.querySelector('#lblOnline');
const lblOffline = document.querySelector('#lblOffline');
const txtMensaje = document.querySelector('#txtMensaje');
const btnEnviar  = document.querySelector('#btnEnviar');


socket.on('connect',() => {

    console.log('Conectado al servidor');
    lblOnline.style.display= "";
    lblOffline.style.display= "none";
    
});
socket.on('disconnect',() => {

    console.log('Desconectado del servidor');
    lblOffline.style.display= "";
    lblOnline.style.display= "none";

});

btnEnviar.addEventListener('click',() => {

    const mensaje = txtMensaje.value;

    const payload = {
        id:'123ABC',
        msg:mensaje,
        fecha:new Date().getTime()
    }

    socket.emit('enviar-mensaje',payload)
});