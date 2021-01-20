var nombre = prompt("Ingrese su Nombre");
var apellido = prompt("Ingrese su Apellido");
var ciudad = prompt("Ingrese su ciudad");
var edad = parseInt(prompt("Ingrese su Edad"));
var sexo = prompt("Ingrese su sexo");


function mensaje () {
    var mensajeTexto = `Hola ${nombre} ${apellido}, cómo estás? Bienvenido al sitio web de tu clásico seguro, según su edad: ${edad}, su ciudad: ${ciudad} y su sexo: ${sexo}, va a poder acceder a los siguientes beneficios`

    alert(mensajeTexto);
}

//lamo a la funcion:
mensaje()
