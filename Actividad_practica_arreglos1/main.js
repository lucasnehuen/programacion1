let arreglos = ["Pyhon","JavaScript","Csharp","C++","Java","PHP","Ruby"]

console.log(`
longitud= ${arreglos.length}
`)

let ultimo_elemento = arreglos [arreglos.length-1]
console.log(`
ultimo_elemento= ${ultimo_elemento} 
`)

let indice = arreglos.indexOf("C++")
console.log(`
Posiciòn del elemento C++= ${indice}
`)

arreglos.forEach((element,index) => {
    console.log(`
    ${index} - ${element}
    `)
});

arreglos.push("Go")
console.log(arreglos)

arreglos.shift()
console.log(arreglos)

arreglos.unshift("Kotlin")
console.log(arreglos)

arreglos.splice(4,2)
console.log(arreglos)

