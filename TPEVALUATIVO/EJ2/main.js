const Mostrar_temperatura =() =>{
    const temp=document.getElementById("inp_Farenheit").value

    if(temp>=14 && temp<=32){
        const resultado=("Temperatura baja")
        document.getElementById("resultado").textContent=resultado

      }else{
            if(temp>32 && temp<=68){
            const resultado=("Temperatura adecuada")
            document.getElementById("resultado").textContent=resultado

        }else{
             if(temp>68 && temp<=96){
                    const resultado=("Temperatura alta")
                    document.getElementById("resultado").textContent=resultado

                }else{
                    const resultado=("tempertura desconocida")
                    document.getElementById("resultado").textContent=resultado
            }

        }
    }
}
