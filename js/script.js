

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
    }

    let nuevoAuto = new Auto("Rambler", "Ambassador", 1966, "SLY-052", "No");

    let nuevaListaDeAutos = new ListaDeAutos();

    nuevaListaDeAutos.tomarDatosInicialesAuto();

    nuevaListaDeAutos.agregarDatos(nuevoAuto);

    console.log(nuevaListaDeAutos.listaAutos);


localStorage.setItem("valorRandom", "1231321");

let resultado = localStorage.getItem("valorRandom");
