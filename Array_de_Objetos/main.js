//crear un arreglo de objetos

let vehiculos = [
    {
        marca:'Ford',
        modelo:'Focus',
        año:2014,
        origen:'mercosur'

    },
    {
        marca:'Volkswagen',
        modelo:'Golf 1.4 TSI',
        año:2014,
        origen:'Mexico'

    }
]


vehiculos.forEach((element,index)=>{
    console.log(index+'-'+element.modelo)
});

//funciones asincronas - concepto de Async y Await
const recorrer= async() =>{

/*esto realiza una solicitud o peticiòn HTTPa traves del Metodo GET*/
    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')

    const publicaciones= await respuesta.json()

    publicaciones.forEach(element=> {
        console.log(element.title)
    });
}

const boton= document.getElementById("btn_ejecutar")
boton.addEventListener("click", recorrer)