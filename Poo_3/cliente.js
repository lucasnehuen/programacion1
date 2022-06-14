export default class Cliente{

    //constructor es un metodo que se ejecuta cuando se hace una instancia
    constructor(nom,ape,dni){
        //this es un atributo que pertenece a la clase
        this.nombre = nom
        this.apellido = ape
        this.dni = dni
    }

    guardar_cliente()
    {

        let nuevo_cliente = {
            nombre: this.nombre,
            apellido: this.apellido,
            dni: this.dni
        }

        if("listado_clientes"in localStorage){
           let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))
           lista_clientes.push(nuevo_cliente)
           localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))
        }else{
        

            let lista_clientes = []
            lista_clientes.push(nuevo_cliente)

            //CREAR EL SECTOR DE ALMACENAMIENTO
            localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))
        }

        
    }

    obtener_clientes()
    {
        let lista_clientes = JSON.parse(localStorage.getItem("listado_cliente"))

        let filas = []
        lista_clientes.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="eliminar_cliente(${index})" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                </td>
            </tr>`
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_cliente(index)
    {
      let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

      lista_clientes.splice(index,1)

      localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))

      this.obtener_clientes()
    }

}

