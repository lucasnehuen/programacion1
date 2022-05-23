const fakes = async() => {


    const resultado = await fetch('https://fakestoreapi.com/products/category/jewelery');
    const datos = await resultado.json()

    

    let elementos = []
    datos.forEach(joyeria => {
        
        let col =`
        <div class="col-md-4">
        <div class="card" style="width: 18rem;">
        <img class="card-img-top img-fluid" src="${joyeria.image}" alt="Card image cap">
        <div class="card-body btn-secondary">
          <p class="card-text">${joyeria.description}</p>
          <p class="card-text">${joyeria.price}</p>
        </div>
      </div>
        </div>
        `
        elementos.push(col)
        
    });
    document.getElementById('row_tienda').innerHTML = elementos.join('')


}
fakes()