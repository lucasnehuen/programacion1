function calcular_potencia()
{
    //lograr extraer de cada input los valores
    const tension = document.getElementById("inp_tension").value

    const corriente = document.getElementById("inp_corriente").value

    const potencia = tension*corriente

    return potencia
}





function mostrar()
{
 const respuesta = calcular_potencia()
 alert (respuesta)
}