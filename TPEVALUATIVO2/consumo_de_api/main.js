const dolar = async () => {

    const resultado = await fetch('https://www.dolarsi.com/api/api.php?type=valoresprincipales');


    const datos = await resultado.json()

    let elementos = []
    datos.forEach(dolares => {
        let col = `
        <tr>
        <td>${dolares.casa.nombre}</td>
        <td>$${dolares.casa.compra}</td>
        <td>$${dolares.casa.venta}</td>
    </tr>`
    
     elementos.push(col)
    console.log(dolares)
    });
document.getElementById('tbody').innerHTML = elementos.join('')
}
dolar ()