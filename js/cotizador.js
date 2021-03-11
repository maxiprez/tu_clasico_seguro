
// El select de los años
const maxYear = new Date().getFullYear(),
      minYear = maxYear - 120;

const selectYears = document.getElementById('anio');
    for(i = maxYear; i > minYear; i--){
        let option = document.createElement('option');
        option.value = i;
        option.innerHTML = i;
        selectYears.appendChild(option)
    }

// Funcion cotizacion del seguro
const cotizarSeguro=()=>{
 let marca = document.getElementById("marca").value;
 let modelo = document.getElementById("modelo").value;
 let anio = document.getElementById("anio").value;
 let plan = document.getElementById("plan").value;
 let origen = document.getElementById("autoImportado").value;

 let divResumen = document.getElementById("resumen");




let cotizacion = {marca, anio, plan};

divResumen.style.backgroundColor = "#FFF";
divResumen.style.display = "block";

divResumen.innerHTML = `<h4>Resumen de la cotización</h4>
                        <ul>
                            <li><strong>Marca:</strong> ${mayuscula(marca)}</li>
                            <li><strong>Modelo:</strong> ${mayuscula(modelo)}</li>
                            <li><strong>Año:</strong> ${anio}</li>
                            <li><strong>Origen:</strong> ${mayuscula(origen)}</li>
                            <li><strong>Plan:</strong> ${mayuscula(plan)}</li>
                            <li><strong>Precio Seguro:</strong> $</li>
                        </ul>
`;                     

    
}

// Para que la primer letra aparezca en mayús
const mayuscula = (palabra) =>{
    return palabra.charAt(0).toUpperCase()+palabra.slice(1);
 }