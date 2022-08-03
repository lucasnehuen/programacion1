function almacenar_indice(index)
{
    localStorage.setItem("indice", index)
}

function agregar(n,p) {
    let nuevo_pedido = {
        nombre: n,
        precio:p,
        cantidad:1
    }

    if("listado_pedido" in localStorage){
        let lista_pedido = JSON.parse(localStorage.getItem("listado_pedido"))
        lista_pedido.push(nuevo_pedido)
        localStorage.setItem("listado_pedido",JSON.stringify(lista_pedido))
    }else{
    
        let lista_pedido = []
        lista_pedido.push(nuevo_pedido)

        localStorage.setItem("listado_pedido",JSON.stringify(lista_pedido))

    }
}





