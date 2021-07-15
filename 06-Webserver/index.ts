const express = require('express')
const app = express()

//Servir contenido estatico con el path
app.use( express.static('public')); //si hago esto lo de abajo jamas se va a ejecutar

//Lo de abajo
app.get('/',(req:any, res:any)=> {;
    res.send('Home page');
})

//
app.get('/hola-mundo',(req:any, res:any)=> {
    res.send('Hello World/ Hello World');
})
app.get('/hola-mundo',(req:any, res:any)=> {
    res.send('Hello World/ Hello World');
})
app.get('*',(req:any, res:any) =>{
    res.send('404 | PAGE NOT FOUND');
})
app.listen(8080);