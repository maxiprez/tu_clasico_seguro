let autoMarca = prompt("Ingrese la marca de su vehículo");
let autoModelo = prompt("Ingrese el modelo de su vehículo");
let autoAnio = prompt("Ingrese el año de su vehículo");
let autoDominio = prompt("Ingrese el dominio de su vehículo");

function Auto(autoMarca, autoModelo, autoAnio, autoDominio){

    this.marca = autoMarca;
    this.modelo = autoModelo;
    this.anio = autoAnio;
    this.dominio = autoDominio;

    this.getDatosDelAuto = function(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Dominio: ${this.dominio}`;
    }
}

let auto1 = new Auto(autoMarca, autoModelo, autoAnio, autoDominio);


console.log("Auto1: ", auto1.getDatosDelAuto());