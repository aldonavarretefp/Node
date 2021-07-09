const multiplicar = (base,n)=>base*n;

console.clear();
console.log("============")
console.log("Tabla del 5")
console.log("============")

const base = 5
for (let i = 1; i < 11; i++) {
    console.log(`${base} x ${i} = ${multiplicar(base,i)}`)
  }