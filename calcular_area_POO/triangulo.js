export default class Triangulo{

  mostrar = () => {

    const bm = parseInt(document.getElementById("inp_basemenor").value)
    const BM = parseInt(document.getElementById("inp_basemayor").value)
    const h = parseInt(document.getElementById("inp_altura").value)
     
    const suma = (bm) +(BM)
    const resultado = suma*(h) / 2

    document.getElementById("h_titulo").textContent = resultado
}


 boton = document.getElementById("btn_mostrar").addEventListener("click", mostrar)

}