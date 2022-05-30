export default class Triangulo{
    constructor(base,altura){

      this.base = base
      this.altura = altura 
    }

    calcular_area3(){

      const resultado = this.base * this.altura / 2
      return resultado
    }
} 
