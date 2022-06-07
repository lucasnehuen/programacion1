let criptomonedas= ["Bitcoin","Etherium","Theter","BNB","Cardano","Dai","Helium","Shiba Inu","Tron","Cronos","Solana"]


criptomonedas.unshift("Stellar")
console.log(criptomonedas)


let indice = criptomonedas.indexOf("Shiba Inu")
criptomonedas.splice(indice, 2)
console.log(criptomonedas)


criptomonedas.push("Gate")
console.log(criptomonedas)

criptomonedas.forEach((element, index) => {
    
    console.log(`
    ${index} - ${element}
    `)
});


const mostrar = () => {

let ultimo_elemento = criptomonedas[criptomonedas.length-1]

document.getElementById('h1_posicion').textContent = `
longitud =${criptomonedas.length};

último elemento: ${ultimo_elemento};

Posicion del elemento 6 = ${criptomonedas[6]}
`
}
document.getElementById("btn_mostrar").addEventListener("click",mostrar)





const recorrer = () => {
    let element  = []
    criptomonedas.forEach(element => {
    
        let col =`
        <ul class="list-group">
        <li class="list-group-item">An item</li>
        <li class="list-group-item">A second item</li>
        <li class="list-group-item">A third item</li>
        <li class="list-group-item">A fourth item</li>
        <li class="list-group-item">And a fifth one</li>
        </ul>
        `
        console.log(element)
    });
 document.getElementById('tbody').innerHTML = element.join('')
}
document.getElementById("btn_criptomoneda").addEventListener("click", recorrer)

recorrer()
