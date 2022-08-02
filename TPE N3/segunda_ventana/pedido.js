export default class Pedido{
    
    obtener_productos()
    {
        let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

        let filas = [] 
        lista_productos.forEach((element) => {
            let fila = `
            <div class="col-lg-4 mb-3">
            <div class="card h-100">
            <img src="${element.imagen}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">$${element.precio}</p>
                <p class="card-text">${element.descripcion}</p>
                <a href="#" class="btn btn-primary">agregar</a>
            </div>
            </div>
            </div>
            `
            filas.push(fila)
        });
        document.getElementById("cartas").innerHTML = filas.join('')
    }
}