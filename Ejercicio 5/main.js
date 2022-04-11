const calcular_raices=(Valora,Valorb,Valorc)=>{
    
    const resusltado_bloque1 = math.pow(ValorB, 2) - 4 * ValorA * ValorC

    const resultado_mas = -ValorB + math.sqrt(resutlado_bloque1)
    const resultado_menos = -ValorB - math.sqrt(resutlado_bloque1)
    
    const resultado1 = resultado_mas / (2*ValorA)
    const resultado2 = resultado_menos / (2*ValorA)
    return `resultado 1=${resultado1}resultado 2=${resultado2}`
}

const mostrar_resultado=()=>{

    const valorA= document.getElementById("inp_valorA").value
    const valorB= document.getElementById("inp_valorB").value
    const valorC= document.getElementById("inp_vgalorC").value

    const respuesta=calcular_raices(ValorA,ValorB,ValorC)

    document.getElementById("h_titulo").textContent = resultado

}

const boton = document.getElementById("boton_mostrar")
boton.addEventListener("click", mostrar_resultado)
