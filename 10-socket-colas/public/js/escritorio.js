// Referencias HTML
const lblEscritorio     = document.querySelector('h1');
const btnAtenderTicket  = document.querySelector('button');
const lblTicket         = document.querySelector('small');
const divAlerta         = document.querySelector('.alert');
const lblPendientes     = document.querySelector('#lblPendientes');



const socket = io();

const searchParams = new URLSearchParams(window.location.search);

if(!searchParams.has('escritorio')){
    window.location = 'index.html'
    throw new Error('El escritorio es obligatorio');
}

const escritorio = searchParams.get('escritorio');
lblEscritorio.innerText = escritorio;

divAlerta.style.display = "none";


socket.on('connect', () => {
    
    btnAtenderTicket.disabled = false;
});

socket.on('disconnect', () => {
    
    btnAtenderTicket.disabled = true;
});

socket.on('tickets-pendientes',(ticketsFaltantes) => {
    if (ticketsFaltantes===0) {
        lblPendientes.style.display = 'none'
    }else{
        lblPendientes.style.display = ''
        lblPendientes.innerText = ticketsFaltantes;
    }
})


btnAtenderTicket.addEventListener( 'click', () => {
    
    
    socket.emit('atender-ticket',{escritorio},({ok,ticket,msg}) => {
        
        if(!ok){
            lblTicket.innerText = `-`
            return divAlerta.style.display = "";
        }
        lblTicket.innerText = `ticket ${ticket.numero}`
    });
    

});