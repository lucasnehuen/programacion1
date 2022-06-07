
let consolas = ["PlayStation","Xbox","Nintendo Game Cube","Sega Dreamcast","Game boy Advanced","Pokemon Mini"]


consolas.push("Nintendo 64")
console.log(consolas)

let indice = consolas.indexOf("Game boy Advanced")

consolas.splice(indice,2)
console.log(consolas)

consolas.forEach((element, index) => {
    
    console.log(`
    ${index} - ${element}
    `)
});




const mostrar = () => {

    

let ultimo_elemento = consolas [consolas.length-1]



document.getElementById('h1_posicion').textContent = `
longitud =${consolas .length}
último elemento: ${ultimo_elemento}
Posicion del elemento 4 = ${consolas[4]}
`
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar )

const recorrer = () => {
let elementos = []
consolas.forEach((index,element) => {
    
    let col =`
    <tr>
        <td>${index}</td>
        <td>${element}</td>
    </tr>
    `
    elementos.push(col)


});
document.getElementById('tbody').innerHTML = elementos.join('')
}

recorrer()
document.getElementById("btn_consola").addEventListener("click", consolas)






