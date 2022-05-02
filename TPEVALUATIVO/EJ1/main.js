    function calcular()
    {

        const auto = document.getElementById("inp_auto").value

        if(auto=='Ford Ka'){
            const resultado= 1750000*15/100

            document.getElementById("resultado").textContent=resultado

        }else{
            if(auto == 'Ford Fiesta'){
                const resultado= 1950000*5/100

                document.getElementById("resultado").textContent=resultado

            }else{
                if(auto=='Ford Focus'){
                const resultado= 2560000*10/100
                document.getElementById("resultado").textContent=resultado
            }
        }

    }
}