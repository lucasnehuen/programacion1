import Producto from "./producto.js";

function guardar (){
    let nombre = document.getElementById("inp_nombre").value
    let descripcion = document.getElementById("inp_descripcion").value
    let Imagen = document.getElementById("inp_imagen").value
    let precio = document.getElementById("inp_precio").value

    let producto = new Producto(nombre,descripcion,Imagen,precio) 
    producto.guardar_producto()
}

document.getElementById("btn_guardar").addEventListener("click",guardar)

function listar(){
    let producto = new Producto()
    producto.obtener_productos()
}
listar()

function eliminar(){
    let indice = localStorage.getItem("indice")
    let producto = new Producto()
    producto.eliminar_producto(indice)

}
document.getElementById("btn_eliminar").addEventListener("click",eliminar)