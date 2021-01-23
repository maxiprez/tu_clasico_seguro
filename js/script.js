/*var nombre = prompt("Ingrese su Nombre");
var apellido = prompt("Ingrese su Apellido");
var ciudad = prompt("Ingrese su ciudad");
var edad = parseInt(prompt("Ingrese su Edad"));
var sexo = prompt("Ingrese su sexo");


function mensaje () {
    var mensajeTexto = `Hola ${nombre} ${apellido}, cómo estás? Bienvenido al sitio web de tu clásico seguro, según su edad: ${edad}, su ciudad: ${ciudad} y su sexo: ${sexo}, va a poder acceder a los siguientes beneficios`

    alert(mensajeTexto);
}

//lamo a la funcion:
mensaje()*/


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



//let auto1 = new Auto("Rambler", "Ambassador", 1966, "SLY-052");

