
//crear un array
let helados = ["cereza","banana split","Dulce de Leche","chocolate blanco"]

//mostrar longitud de un arreglo
console.log(`
longitud =${helados .length}
`)

//Acceso a un elemento un de arreglo mediante su indice

//acceder al ultimo elemento
let ultimo_elemento = helados[helados.length-1]
console.log(`
 último elemento: ${ultimo_elemento}
`)

//recorrer un arreglo haciendo uso de foreach
helados.forEach((element, index) => {
    
    console.log(`
    ${index} - ${element}
    `)
});

//como agregar un elemento al final de un arreglo
helados.push("Pistacho")
console.log(helados)

//como elimino el ultimo elemento de un arreglo
helados.pop()
console.log(helados)

//como agregar un elemento al inicio de un arreglo 
helados.unshift("menta granizada mejorada, safable") 
console.log(helados)

//como eliminar el primer elemento de un array
helados.shift()
console.log(helados)

//como encontrar los indices de un arreglo de un array
let indice = helados.indexOf("banana split")
console.log(`
Posicion del elemento banana split = ${indice}
`)

//Eliminar un elemento segun su inidice 
helados.splice(indice,1)
console.log(helados)

//Eliminar varios elementos
helados.splice(0,3)
console.log(helados)

//copiar un arreglo 
helados.push("marroc")

//aca comienza la copia
//["marroc"]
let copia = helados.slice()

copia.push("chocolate")

console.log(copia)
console.log(helados)