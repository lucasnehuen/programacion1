function mostrar()
{

    const auto = document.getElementById("inp_auto").value

    if(auto=='Ford Ka'){
        const resultado= 1750000*15/100
    }else{
        if(auto == 'Ford Fiesta'){
            const resultado= 1950000*5/100
        }else{
            const resultado= 2560000*10/100
        }
    }

}

<button onclick="functionToExecute()">Mostrar</button>