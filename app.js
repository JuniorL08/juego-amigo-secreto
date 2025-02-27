//Variables globales
let cantidadDeAmigos = 5;
let amigos = [];
let inputAmigo = document.querySelector("#amigo");
let amigosSorteados= [];
let indiceDeAmigos = 0;

condicionInicial();

//Funciones

function agregarAmigo() {
    let inputNombre = inputAmigo.value;

    if (inputAmigo.value == "") {
        window.alert("Debes introducir un valor válido");
    } else {
        if (amigos.length === cantidadDeAmigos) {
            validarCantidadDeAmigos();
        } else {
            amigos.push(inputNombre);
            limpiarInput();
            actualizarLista();
        }
    }
}

function actualizarLista() {
    document.querySelector("#listaAmigos").innerHTML += `<li>${amigos[indiceDeAmigos]}</li>`;
    indiceDeAmigos++;
}

function sortearAmigo(){
    //Genera un numero random para que sea el indice del array de la lista de amigos
    let indiceRandom = Math.floor(Math.random() * cantidadDeAmigos);
    asignarTextoElemento("#resultado", `El amigo secreto es: ${amigos[indiceRandom]}`);
    console.log(indiceRandom);
}
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function validarCantidadDeAmigos() {
    if (amigos.length === cantidadDeAmigos) {
        asignarTextoElemento(".section-title", `Solo puedes añadir ${cantidadDeAmigos} amigos. Procede a sortear`);
    }
}
function limpiarInput() {
    inputAmigo.value = "";
}
function condicionInicial() {
    asignarTextoElemento(".section-title", "Introduce el nombre de tu amigo:");
}