const miFormulario = document.querySelector('form');

const url = ( window.location.hostname.includes("localhost") )
                    ? 'http://localhost:8080/api/auth/'
                    : 'https://rest-server-aldo.herokuapp.com/api/auth/';


miFormulario.addEventListener('submit',(e) => {
    e.preventDefault(); //Evita el refresh;
    const formData = {};
    for (let element of miFormulario.elements) {
        if(element.name.length>0) {
            formData[element.name] = element.value;
        }
    }
    fetch(url + 'login',{
        method: 'POST',
        body: JSON.stringify(formData),
        headers: {'Content-Type': 'application/json'}

    }).then(response    =>  response.json() )
    .then(({msg = "",token}) => { 
        if(msg.includes("no existe")){
            return console.error(msg);
        }
        localStorage.setItem('token', token);
        //Redireccionando
        window.location = "chat.html";
        
    } )
    .catch(console.log)
})

function onSignIn(googleUser) {
    // const profile = googleUser.getBasicProfile();
    // console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    // console.log('Name: ' + profile.getName());
    // console.log('Image URL: ' + profile.getImageUrl());
    // console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    const id_token = googleUser.getAuthResponse().id_token;
    const data = {id_token};
    //Peticion post desde el frontend
    fetch(url + "google",{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
                }
        )
        .then(response=>response.json())
        .then(({token})=>{
            localStorage.setItem("token",token)
            window.location = "chat.html";
        })
        .catch(console.log);

}
function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
    console.log('User signed out.');
    });
}

