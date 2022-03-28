// funcion clàsica
function mostrar (){

    //forma1
    //const nombres = document.querySelector("#inp_nombres").value

    //forma2
    const nombres = document.getElementById("inp_nombres").value


    //sin template string
    // const mensaje = 'nombre y apellido: '+nombres

    //template spring
    const  mensaje = `nombre y apellido: ${nombres}`.value

    alert(mensaje)
}

function mifuncion_con_retorno()
{
    const ejemplo = 'probando funcion con retorno'
    //retorna una respuesta
    return ejemplo
}

function mostrar_respuesta()
{
    //acabo de ejecutar la funcion
    const respuesta = mifuncion_con_retorno()
    alert(respuesta)
}



