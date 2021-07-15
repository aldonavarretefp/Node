const express = require('express')
const app = express()

//Servir contenido estatico con el path
app.use( express.static('public')); //si hago esto lo de abajo jamas se va a ejecutar

app.set('view engine','hbs');

app.get('/',(req:any, res:any)=> {

    res.render("home",{
        nombre:"Aldo",
        titulo:"Curso de Node"
    });
})

app.get('/generic',(req:any, res:any)=> {
    // res.send('Hello World/ Hello World');
    res.sendFile(__dirname + "/public/generic.html");
})
app.get('/elements',(req:any, res:any)=> {
    // res.send('Hello World/ Hello World');
    res.sendFile(__dirname + "/public/elements.html")
})
app.get('*',(req:any, res:any) =>{
    res.sendFile(__dirname+"/public/back/template/404.html")
})
app.listen(8080);