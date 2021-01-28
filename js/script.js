
const IMPORTADO_SI = "SI";
const IMPORTADO_NO = "NO";
let autoMarca = prompt("Ingrese la marca de su vehículo");
let autoModelo = prompt("Ingrese el modelo de su vehículo");
let autoAnio = prompt("Ingrese el año de su vehículo");
let autoDominio = prompt("Ingrese el dominio de su vehículo (admite 6 o 7 caracteres)");
let autoImportado = prompt("Su auto es importado? (Ingrese Si o No)");

function Auto(autoMarca, autoModelo, autoAnio, autoDominio, autoImportado){

    this.marca = autoMarca;
    this.modelo = autoModelo;
    this.anio = autoAnio;
    this.dominio = autoDominio;
    this.importado = autoImportado;

    this.getDatosDelAuto = function(){
        return `Marca: ${this.marca}, Modelo: ${this.modelo}, Año: ${this.anio}, Dominio: ${this.dominio}, Importado?: ${this.importado}`;
    }

    this.getPagaPatente = function(){
        if(autoAnio <= 2001 && autoImportado.toUpperCase() === IMPORTADO_NO){
            return 'No, su auto no paga patente'
        } else {
            return 'Si, su auto paga patente'
        }
      }

       }

let auto1 = new Auto(autoMarca, autoModelo, autoAnio, autoDominio, autoImportado);


// Devuelve los datos ingresados:
console.log("Auto1: ", auto1.getDatosDelAuto());
console.log("Paga patente: ", auto1.getPagaPatente());



// Arrays:

let arrayAuto = [autoMarca, autoModelo, autoAnio, autoDominio, autoImportado];

let arrayMiAutoClasico = ["Rambler", "Ambassador", 1966, "SLY-512", "No"];

console.log(arrayMiAutoClasico[0]); // Indica por console la marca del auto

console.log(arrayAuto.length); // Indica el largo del primer array

// Muestra si se ingresó la misma marca del auto del primer array o no

if (arrayAuto[0] == arrayMiAutoClasico[0]) {
    alert("Usted ha ingresado la misma marca de auto que muestra el console log");
  }
else {
    alert ("Usted ingresó " + arrayAuto[0]);
}
