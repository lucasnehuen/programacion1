import Producto from "./producto.js";

function guardar (){
    let nombre = document.getElementById("inp_nombre")
    let descripcion = document.getElementById("inp_descripcion")
    let Imagen = document.getElementById("inp_imagen")
    let precio = document.getElementById("inp_precio")

    let producto = new Producto(nombre,descripcion,Imagen,precio) 
    producto.guardar_producto()
}
document.getElementById("btn_guardar").addEventListener("click",guardar)

