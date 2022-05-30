import Trapecio from "./trapecio.js"

    const mostrar = () => {
  
      const bm = parseInt(document.getElementById("inp_basemenor").value)
      const BM = parseInt(document.getElementById("inp_basemayor").value)
      const h = parseInt(document.getElementById("inp_altura").value)
       
      const trapecio = new Trapecio(BM,bm,h)
      const resultado = trapecio.calcular_area()
  
      document.getElementById("h_titulo").textContent = resultado
  }
  
  document.getElementById("btn_mostrar").addEventListener("click", mostrar)





  import Rectangulo from "./rectangulo.js"

  const mostrar2 = () => {

    const altura = parseInt(document.getElementById("inp_altura2").value)
    const ancho = parseInt(document.getElementById("inp_ancho").value)

    const rectangulo = new Rectangulo(altura,ancho)
    const resultado = rectangulo.calcular_area2()
    console.log(altura, ancho)
    document.getElementById("titulo").textContent = resultado
  }
  document.getElementById("btn_mostrar2").addEventListener("click", mostrar2)






import Triangulo from "./triangulo.js"

const mostrar3 = () =>{

    const base = parseInt(document.getElementById("inp_base2").value)
    const altura = parseInt(document.getElementById("inp_altura3").value)

    const triangulo = new Triangulo(base,altura)
    const resultado = triangulo.calcular_area3()

    document.getElementById("h1_titulo").textContent = resultado
}
document.getElementById("btn_mostrar3").addEventListener("click", mostrar3)

