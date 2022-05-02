    function calcular()
    {
        //guardamos un elemento llamado "auto" 
        const auto = document.getElementById("inp_auto").value

        //si auto es igual a Ford Ka se mostrara el valor con descuento del auto
        if(auto=='Ford Ka'){
            const resultado= 1750000 - (1750000*15/100)

            document.getElementById("resultado").textContent=resultado

        }else{
             //si auto es igual a Ford Fiesta se mostrara el valor con descuento del auto
            if(auto == 'Ford Fiesta'){
                const resultado= 1950000 - (1950000*5/100)

                document.getElementById("resultado").textContent=resultado

            }else{
            //si auto es igual a Ford Focus se mostrara el valor con descuento del auto
                if(auto=='Ford Focus'){
                const resultado= 2560000 - (2560000*10/100)
                document.getElementById("resultado").textContent=resultado
                }
            }

        }
    }