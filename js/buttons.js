//Botones siguiente:
$( "#formCar" ).keypress(function(event){
    if(event.keyCode == 13){
        $("#siguiente1").click();
        console.log("Se hizo click en siguiente")
    }
});

$( "#formPersonal" ).keypress(function(event){
    if(event.keyCode == 13){
        $("#siguiente2").click();
        console.log("Se hizo click en siguiente")
    }
});

//Botón enviar disabled si no está el checkbox activo
    $('#submit').prop("disabled", true);

    $("#defaultCheck1").click(function(){
        if($(this).is(":checked")){
            $("#submit").prop("disabled", false);            
        } else{      
              $("#submit").prop("disabled",true);
        }
           });

//Disabled el primer boton de siguiente

$( document ).ready(function (){
    validarAuto();
  $( "#marca, #modelo, #dominio, #importado, #año" ).change(validarAuto);
});

 function validarAuto(){
    if( $("#marca").val().length > 0 &&
        $("#modelo").val().length > 0 &&
        $("#año").val().length > 0 &&
        $("#importado").val().length > 0 &&
        $("#dominio").val().length > 0) {
        $( "#siguiente1" ).prop( "disabled", false); 
        $( "#personalInfoButton" ).prop( "disabled", false);  
    } else{
        $( "#siguiente1" ).prop( "disabled", true);
        $( "#personalInfoButton" ).prop( "disabled", true);
    }
 }
 

//Disabled el segundo boton de siguiente
$( document ).ready(function (){
    validarPersona();
  $( "#nombre, #apellidos, #edad, #dni, #provincia, #localidad, #eMail, #tel" ).change(validarPersona);
});

 function validarPersona(){
    if( $("#nombre").val().length > 0 &&
        $("#apellidos").val().length > 0 &&
        $("#edad").val().length > 0 &&
        $("#dni").val().length > 0 &&
        $("#provincia").val().length > 0 &&
        $("#localidad").val().length > 0 &&
        $("#eMail").val().length > 0 &&
        $("#tel").val().length > 0 ) {
        $( "#siguiente2" ).prop( "disabled", false);  
        $( "#messageInfoButton" ).prop("disabled", false);  
    } else{
        $( "#siguiente2" ).prop( "disabled", true);
        $( "#messageInfoButton" ).prop("disabled",true);
    }
 }