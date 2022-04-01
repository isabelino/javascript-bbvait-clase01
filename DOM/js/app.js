console.log("holaaaaaaaaaaaaaaaaaaaaaaaa");

let titulo = document.getElementById('titulo');
let parrafo = document.getElementById('parrafo');
let contenido = document.getElementById('contenido');
let boton = document.getElementById('boton');
let listar = document.getElementById('listar');

function cambiar(){
    titulo.innerText="Esto es DOM y JAVASCRIPT";
    titulo.style.color="green";
    parrafo.innerText="Podemos acceder al DOM con document";
    parrafo.style.fontSize="50px";
    contenido.innerHTML="<ul><li>lunes</li><li>martes</li><li>miercoles</li></ul>";
}

//boton.onclick = cambiar;

function cambiarNombre(){
    let dato = document.getElementById('nombre').value;
    let numero = parseFloat(dato);

    document.getElementById('respuesta').innerHTML=(numero*100);
}

//print de javascrip a html write
//document.write("Esto es una prueba de write");

function listarDias(){
    contenido.innerHTML = "<ul><li>lunes</li><li>martes</li><li>miercoles</li><li>jueves</li><li>viernes</li><li>sabado</li><li>domingo</li></ul>";
}

//addEventListener es evento escuchador 

listar.addEventListener("click",listarDias);