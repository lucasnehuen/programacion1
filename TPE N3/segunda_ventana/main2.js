import Pedido from "./pedido.js";

function listar() {
let pedido = new Pedido()
pedido.obtener_productos()
}

listar()

function tabla() {
    let indice = localStorage.getItem("indice_pedido")
    const pedido = new Pedido()
    pedido.agregar_pedidos(indice)
}
tabla()
document.getElementById("btn_agregar").addEventListener("click",mostrar_tabla)