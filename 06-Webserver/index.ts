const express = require('express')
const app = express();

app.get('/',(req:any, res:any)=> {;
    res.send('Home page');
})
app.get('/hola-mundo',(req:any, res:any)=> {
    res.send('Hello World/ Hello World');
})
app.get('/hola-mundo',(req:any, res:any)=> {
    res.send('Hello World/ Hello World');
})
app.get('*',(req:any, res:any) =>{
    res.send('404 | PAGE NOT FOUND');
})
app.listen(8080)