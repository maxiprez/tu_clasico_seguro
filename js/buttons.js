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

//Botón enviar:
/*$( "#formMessage" ).keypress(function(event){
    if(event.keyCode == 13){
        $("#send").click();
        console.log("Se envió la info");
    }
});*/






//Disabled el primer boton de siguiente
$(document).ready(function(){
    $("#siguiente1").attr("disabled",true);
    $(":input").keyup(function(){
        if($(this).val().length != 0)
            $("#siguiente1").attr("disabled", false);            
        else
            $("#siguiente1").attr("disabled",true);
    })
});


//Disabled el segundo boton redondo azul
$(document).ready(function(){
    $("#personalInfoButton").attr("disabled",true);
    $(":input").keyup(function(){
        if($(this).val().length !=0)
            $("#personalInfoButton").attr("disabled", false);            
        else
            $("#personalInfoButton").attr("disabled",true);
    })
});


//Disabled el segundo boton de siguiente
$(document).ready(function(){
    $("#siguiente2").attr("disabled",true);
    $(".multisteps-form__input").keyup(function(){
        if($(this).val().length !=0)
            $("#siguiente2").attr("disabled", false);            
        else
            $("#siguiente2").attr("disabled",true);
    })
});

//Disabled el tercer boton redondo azul
$(document).ready(function(){
    $("#messageInfoButton").attr("disabled",true);
    $(".multisteps-form__input").keyup(function(){
        if($(this).val().length !=0)
            $("#messageInfoButton").attr("disabled", false);            
        else
            $("#messageInfoButton").attr("disabled",true);
    })
});
