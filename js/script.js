/*let marca = prompt("Ingrese la marca de su vehículo:");
let modelo = prompt("Ingrese el modelo de su vehículo:");
let anio = prompt("Ingrese el año de su vehículo:");
let dominio = prompt("Ingrese el dominio de su vehículo:");
let importado = prompt("Su clásico es importado?:");*/

let form = document.getElementById("form");

///////////////////////////////////////////////////////////////////////////////


//const IMPORTADO_SI = "SI";
//const IMPORTADO_NO = "NO";

function validar() {
    //Datos del vehículo:
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let anio = document.getElementById("añoAuto").value;
    let dominio = document.getElementById("dominio").value;
    let nombre = document.getElementById("nombre").value;
    //Datos personales y de contacto:   
    let apellidos = document.getElementById("apellidos").value;
    let fechaDeNacimiento = document.getElementById("fechaDeNacimiento").value;
    let dni = document.getElementById("dni").value;
    let provincia = document.getElementById("provincia").value;
    let localidad = document.getElementById("localidad").value;
    let tel = document.getElementById("tel").value;
    let eMail = document.getElementById("eMail").value;

    expresion = /\w+@\w+\.+[a-z]/;

    if(marca === "" || modelo ==="" || anio === "" || dominio === "" || apellidos === "" ||
    fechaDeNacimiento === "" || dni === "" || provincia ==="" || localidad === "" || tel === ""
    || eMail === "") {
       swal ( "Error!" ,  "Todos los campos son obligatorios" ,  "error" );
       return false;
    } else if(nombre.length > 30){
        swal ( "Error!" ,  "El nombre es muy largo" ,  "error" );
        return false;
    }
    else if(apellidos.length > 80){
        swal ( "Error!" ,  "Los apellidos son muy largos" ,  "error" );
        return false;
    }
    
    else if(tel.length > 11){
        swal ( "Error!" ,  "El teléfono es muy largo" ,  "error" );
        return false;
    }
    else if(isNaN(tel)){
        swal ( "Error!" ,  "El teléfono ingresado no es un número" ,  "error" );
        return false;
    }
    else if(!expresion.test(eMail)){
        swal ( "Error!" ,  "Ingrese un correo válido" ,  "error" );
        return false;
    }
}


/*


function ListaDeAutos(){

    this.listaAutos = []

    this.agregarDatos = function(listaAutos){
        this.listaAutos.push(listaAutos)
        sessionStorage.setItem("auto", JSON.stringify(this.listaAutos));
    }
    
    this.tomarDatosInicialesAuto = function(){
        if (sessionStorage.getItem('auto') != null){
        this.listaAutos = JSON.parse (sessionStorage.getItem('auto'))
        }
    }
}



function Auto(marca, modelo, anio, dominio, importado){

    this.marca = marca;
    this.modelo = modelo;
    this.anio = anio;
    this.dominio = dominio;
    this.importado = importado;


    if(anio < 2001){
        if(importado.toUpperCase() === IMPORTADO_SI){
            alert("Su vehículo paga patente");
    
        } else{
            alert("Su vehículo no paga patente");
        };
    } else{
        alert("Su vehículo paga patente");
    }
   

    }

    let nuevoAuto = new Auto(marca, modelo, anio, dominio, importado);

    let nuevaListaDeAutos = new ListaDeAutos();

    nuevaListaDeAutos.tomarDatosInicialesAuto();

    nuevaListaDeAutos.agregarDatos(nuevoAuto);

    console.log(nuevaListaDeAutos.listaAutos);


localStorage.setItem("Patente", dominio);

let resultado = localStorage.getItem("Patente");


*/