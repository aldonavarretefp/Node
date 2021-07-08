const saludar = (nombre) => {
    return `Hola ${nombre} desde arrowfunction`;
}

function saludar2(nombre){
    
    return `Hola ${nombre} desde funcion declarada`;
}

console.log(saludar("Aldo"));
console.log(saludar2("Aldo"));

