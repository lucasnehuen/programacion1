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
        let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        let filas = [] 
        lista_clientes.forEach((element,index) => {
            let fila = `
            <tr>
                <td>${element.nombre}</td>
                <td>${element.apellido}</td>
                <td>${element.dni}</td>
                <td>
                    <button onclick="almacenar_indice(${index})" data-bs-toggle="modal" data-bs-target="#mymodal" class="btn btn-danger btn-sm"><i class="fa fa-trash"></i></button>
                    <button onclick="editar(${index})" class="btn btn-primary btn-sm"><i class="fa fa-edit"></i></button>
                </td>
            </tr>`
            filas.push(fila)
        });
        document.getElementById("tbody").innerHTML = filas.join('')
    }

    eliminar_cliente(index)
    {
      let lista_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

      //eliminamos cliente
      lista_clientes.splice(index,1)

      localStorage.setItem("listado_clientes",JSON.stringify(lista_clientes))

      this.obtener_clientes()
    }

    actualizar_cliente(index){
        //fui a buscar el listado de clientes al storage
        let listado_clientes = JSON.parse(localStorage.getItem("listado_clientes"))

        listado_clientes[index].nombre = document.getElementById("inp_nombre").value
        listado_clientes[index].apellido = document.getElementById("inp_apellido").value
        listado_clientes[index].dni = document.getElementById("inp_dni").value

        localStorage.setItem("listado_clientes", JSON.stringify(listado_clientes))

        //volvemos a construir la tabla
        this.obtener_clientes()
        this.vaciar_formulario()
    }

    vaciar_formulario(){
        document.getElementById("form_cliente").reset()
    }
}