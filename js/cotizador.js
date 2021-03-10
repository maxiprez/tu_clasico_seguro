const cotizarSeguro=()=>{
    let marca = document.querySelector("#marca").value;
    let anio = document.querySelector("#anio").value;
    let respCivil = document.querySelector("#resp_civil").value;
    let terceros = document.querySelector("#terceros").value;
    let todoRiesgo = document.querySelector("#todo_riesgo").value;

    let divResumen = document.querySelector("#resumen").value;
    let divresultado = document.querySelector("#resultado").value;

    let plan = "";

    if (respCivil.checked){
        plan = "resp_civil";
    } else if (terceros.checked){
        plan = "terceros";
    } else if (todoRiesgo.checked){
        plan = "todo_riesgo";
    }
}