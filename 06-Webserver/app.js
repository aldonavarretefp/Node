"use strict";
const http = require("http");
http.createServer((req, resp) => {
    console.log(req);
    resp.write("Hola mundo");
    resp.end();
    //Notas en Udemy
})
    .listen(8080);
console.log("Escuchando en el puerto 8080");
