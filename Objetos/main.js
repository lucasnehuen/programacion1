//crear un objeto

const miobjeto = {
    nombre:'Juan',
    apellido:'Perez',
    dni:33258741,
    correos:{
        gmail:'jp@gmail.com',
        outlook:'jp@gmail.com',
        yahoo:'jp@gmail.ar'
    }
} 
console.log(miobjeto.apellido)


//mostrar los correos
//const gmail= miobjeto.correos.gmail;
//const outlook= miobjeto.correos.outlook;
//const yahoo= miobjeto.correos.yahoo;

//Destructuring Objects
const { gmail,outlook,yahoo } = miobjeto.correos;

console.log(`
correos:

gmail: ${gmail}
outlook: ${outlook}
yahoo: ${yahoo}
`)