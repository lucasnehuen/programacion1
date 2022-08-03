export default class Pedido{

    constructor(n,p){
        this.nombre = n
        this.precio = p
    }
    
    obtener_pedido()
    {
        if("listado_productos" in localStorage){
            let lista_pedido = JSON.parse(localStorage.getItem("listado_productos"))

            let filas = [] 
            lista_pedido.forEach((element) => {
                let fila = `
                <div class="col-lg-3 mb-3">
                <div class="card h-100">
                <img src="${element.imagen}" class="card-img-top">
                <div class="card-body">
                    <h5 class="card-title">${element.nombre}</h5>
                    <p class="card-text">$${element.precio}</p>
                    <p class="card-text">${element.descripcion}</p>
                    <a onclick="agregar('${element.nombre}','${element.precio}')" href="#" class="btn btn-primary">agregar</a>
                </div>
                </div>
                </div>
                `
                filas.push(fila)
            });
            document.getElementById("cartas").innerHTML = filas.join('')
        }else{
            document.getElementById("cartas").innerHTML = null
        }
        
    }

    obtener_pedidos()
    {
        let lista_pedido = JSON.parse(localStorage.getItem("listado_productos"))

        let filas = [] 
        lista_pedido.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.descripcion}</td>
                <td>
                 <img class="card-img-top img-thumbnail" src="${element.imagen}" alt="Card image cap">
                </td>
                <td>$${element.precio}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                </td>
            </tr>`
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }


}




