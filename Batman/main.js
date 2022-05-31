const batman = async() => {

const resultado = await fetch('https://fake-movie-database-api.herokuapp.com/api?s=batman');


const datos = await resultado.json()


let elementos = []
datos.Search.forEach(peliculas => {
    
    let col =`
      <div class="col-md-4">
      <div class="card" style="width: 20rem;">
      <img class="card-img-top img-fluid" src="${peliculas.Poster}" alt="Card image cap">
      <div class="card-body bg-warning">
        <p class="card-text">${peliculas.Title}</p>
        <p class="card-text">${peliculas.Year}</p>
      </div>
    </div>
      </div>
    `
    elementos.push(col)
    console.log(peliculas)

});
document.getElementById('row_peliculas').innerHTML = elementos.join('')

}

batman()