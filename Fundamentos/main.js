//declarar variable - inicializamos//
var numero=6;
alert(numero);

if (numero > 6) {
    console.log('Estas aprobado')
} else{
    console.log('Nos vemos en diciembre')
}


var respuesta = (numero <=4) ?('nos vemos en marzo'):"nos veremos en diciembre"
console.log(respuesta)

/*
diferencia en LET y VAR 
*/

//uso de VAR
var x = 4;
if(x == 44){
    var x = 74 //mismam variable
    console.log(x)//74
}
console.log(x) //74

//uso de let
let y = 11;
if(y == 11){
    let y = 22;
    console.log(y)//22
}
console.log (y) //11