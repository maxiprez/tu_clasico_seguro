
function validar() {
    
 //Datos del vehículo:
 let marca = document.getElementById("marca").value;
 let modelo = document.getElementById("modelo").value;
 let anio = document.getElementById("año").value;
 let dominio = document.getElementById("dominio").value;
 let nombre = document.getElementById("nombre").value;
 let importadoSi = document.getElementById("importadoSi").checked;
 let importadoNo = document.getElementById("importadoNo").checked;
 let planes = document.getElementById("planes").value;
 
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
    || eMail === "" || planes === "" || (importadoSi == false && importadoNo == false)) {
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
    
    swal("Enviado!", "Se ha enviado el formulario con tus datos correctamente", "success");
    return false;
}

