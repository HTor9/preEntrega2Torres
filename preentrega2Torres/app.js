
//console.log("hola")
//console.log(autos)
alert("te toca eleguir un jugador entre los 10 mejores jugadores segun fifa para un equipo de 4ª divicion a quien eligirias?")
let pos = prompt("Elegi la posicion entre (delantero, medio campista, defensor y portero)")
pos.toLocaleLowerCase
//let min = Number(prompt("Valor mimimo"))

//autos = 0;

const datosBusqueda = {
    posicion: pos,
    liga: '',
    pais: "",
    equipo: '',
    nombre: '',
}

function mostrarFut(fut){
    fut.forEach(fut => {
        console.log(fut)
    });
}

function filtrarPosicion(fut){
    if(datosBusqueda.posicion){
        return fut.posicion === datosBusqueda.posicion
    }
    return fut;
}

function filtrarLiga(fut){
    if(datosBusqueda.liga){
        return fut.liga === datosBusqueda.liga
    }
    return fut;
}

function filtrarPais(fut){
    if(datosBusqueda.pais){
        return fut.pais === datosBusqueda.pais
    }
    return fut;
}

function filtrarEquipo(fut){
    if(datosBusqueda.equipo){
        return fut.equipo === datosBusqueda.equipo
    }
    return fut;
}

function filtrarNombre(fut){
    if(datosBusqueda.nombre){
        return fut.nombre === datosBusqueda.nombre
    }
    return fut;
}


function noResultados(){
    console.log("No hay resultados")
}

function filtrarFut(){
    let resultado = fut.filter( filtrarPosicion ).filter(filtrarLiga).filter(filtrarPais).filter(filtrarEquipo).filter(filtrarNombre);

    if(resultado.length) {
        mostrarFut(resultado)
    }else {
        noResultados()
    }
}

filtrarFut()

let a = prompt("Elige tu jugador")
alert("una IA simulara como le iria a el jugador que elegiste en un equipo como Sacachispas")
let maquina = Math.ceil(Math.random()*2);
if (maquina !=1){
    document.write('<div class="card"><img src="image/x1080.jpg"/><p>Gracias a la desicion del nuevo dt y la nueva incorporacion '+ a + ' sacachispas asendio de categoria y tiene una deuda de 10mil millones de dolares el club se fue a la quiebra pero las risas no faltaron para el gran DT</p></div>');    
}
else {
    document.write('<div class="card"><img src="image/xB-jUsMtP_860x575__1.jpg"/><p>tu equipo decendio pero bueno ni jesucristo menos '+ a + ' evitaria que tu equipo se valla a la B esa mancha no se borra</p></div>');
}
//mostrarAutos(autos)