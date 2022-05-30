export default class Trapecio{

    constructor(basemayor, basemenor, altura){
        this.basemayor=basemayor
        this.basemenor=basemenor
        this.altura=altura
    }

    calcular_area(){
       this.suma= this.basemayor + this.basemenor
        const resultado = this.suma*this.altura / 2
        return resultado
    }


}
