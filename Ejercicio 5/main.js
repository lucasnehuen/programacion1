const calcular_raices=(Valora,Valorb,Valorc)=>{
    
    const bloque1 = Math.pow(Valorb, 2) - 4 * Valora * Valorc

    const resultado_mas = -Valorb + Math.sqrt(bloque1)
    const resultado_menos = -Valorb - Math.sqrt(bloque1)
    
    const resultado1 = resultado_mas / (2*Valora)
    const resultado2 = resultado_menos / (2*Valora)
    return `resultado 1=${resultado1} resultado 2=${resultado2}`
}

const mostrar_resultado=()=>{

    const Valora= document.getElementById("inp_valora").value
    const Valorb= document.getElementById("inp_valorb").value
    const Valorc= document.getElementById("inp_valorc").value

    const respuesta= calcular_raices(Valora,Valorb,Valorc)

    document.getElementById("h_titulo").textContent = respuesta

}

const boton = document.getElementById("boton_mostrar")
boton.addEventListener("click", mostrar_resultado)
