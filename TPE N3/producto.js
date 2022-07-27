export default class Producto {

    constructor(nom,desc,img,pr){
    this.nombre = nom
    this.descripcion = desc
    this.imagen = img
    this.precio = pr
    }


    guardar_producto()
    {
        let nuevo_producto ={
            nombre: this.nombre,
            descripcion: this.descripcion,
            imagen: this.imagen,
            precio: this.precio
        }

        if("listado_productos"in localStorage){
            let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))
            lista_productos.push(nuevo_producto)
            localStorage.setItem("listado_productos",JSON.stringify(lista_productos))
        }else{
        
            let lista_productos = []
            lista_productos.push(nuevo_producto)

            localStorage.setItem("listado_productos",JSON.stringify(lista_productos))

        }

        

    }

    obtener_productos()
    {
        let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

        let filas = [] 
        lista_productos.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.descripcion}</td>
                <td>
                 <img class="card-img-top img-thumbnail" src="${element.imagen}" alt="Card image cap">
                </td>
                <td>${element.precio}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                </td>
            </tr>`
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }


    eliminar_producto(index)
    {
      let lista_productos = JSON.parse(localStorage.getItem("listado_productos"))

      lista_productos.splice(index,1)

      localStorage.setItem("listado_productos",JSON.stringify(lista_productos))

      this.obtener_productos() 
    }


}