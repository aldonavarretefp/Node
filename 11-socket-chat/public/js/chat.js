const url = (window.location.hostname.includes('localhost'))
            ? 'http://localhost:8080/api/auth/' 
            : 'https://rest-server-aldo.herokuapp.com/api/auth'
            

let usuario = null;
let socket  = null;

const validarJWT = async() => {
    const token = localStorage.getItem('token') || '';

    if(token.length<=10) {
        window.location = 'index.html'
        throw new Error('No hay token en el servidor');
    }

    fetch(url,{headers:{"x-token": token}})
    .then(response => response.json())
    .then(( { usuario:usuarioDB, token:tokenDB }) => console.log(`Usuario: ${usuarioDB}, Token: ${tokenDB}`))
    .catch(console.log)

    //Nueva vida al token en en chat
    localStorage.setItem('token', tokenDB);
    usuario = usuarioDB;
}


const main = async (params) => {
    
    //Validar JWT
    await validarJWT()
    


}



main();




// const socket = io();