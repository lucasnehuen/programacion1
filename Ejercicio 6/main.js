let marcas = ["Ford","Renault","Volskwagen","Seat","Peugeot","Chevrolet","Fiat","Toyota","Chery"]

console.log(`
longitud =${marcas .length}
`)

let ultimo_elemento = marcas[marcas.length-1]
console.log(`
    último elemento: ${ultimo_elemento}

`)

marcas.forEach((element, index) => {
    
    console.log(`
    ${index} - ${element}
    `)
});

marcas.push("Bugatti")
console.log(marcas)


marcas.pop()
console.log(marcas)


marcas.unshift("Ferrari") 
console.log(marcas)


marcas.shift()
console.log(marcas)


let indice = marcas.indexOf("Peugeot")
console.log(`
Posicion del elemento Peugeot = ${indice}
`)


marcas.splice(indice,3)
console.log(marcas)


marcas.splice(0,5)
console.log(marcas)


marcas.push("chevy")


let copia = marcas.slice()

copia.push("citroen")

console.log(copia)
console.log(marcas)