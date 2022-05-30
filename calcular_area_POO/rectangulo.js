export default class Rectangulo{


    constructor (altura,ancho){
        this.altura= altura
        this.ancho= ancho
    }

    calcular_area2(){

        const resultado = this.altura * this.ancho
        return resultado
        
    }
}