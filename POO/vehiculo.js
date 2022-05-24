//exportar un archivo a otro main.js

export default class Vehiculo{

    constructor(m,k){
    this.marca = m
    this.km = k
    }

    mostrar_datos_del_vehiculo(){
        console.log(`
        Kilometraje: ${this.km}
        Marca: ${this.marca}
        `)
    }
}