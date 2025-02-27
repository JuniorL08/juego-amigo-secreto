// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Variables globales
let cantidadDeAmigos = 5;
let amigos = [];
let inputAmigo = document.querySelector("#amigo");
let indiceDeAmigos= 0;

condicionInicial();

//Funciones

function agregarAmigo() {
    let inputNombre = inputAmigo.value;

    if (inputAmigo.value == "") {
        window.alert("Debes introducir un nombre");
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

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}
function validarCantidadDeAmigos() {
    if (amigos.length === cantidadDeAmigos) {
        asignarTextoElemento(".section-title", `Solo puedes añadir ${cantidadDeAmigos} amigos. Procede a sortear`);
    }
}

function actualizarLista() {
    document.querySelector("#listaAmigos").innerHTML += `<li>${amigos[indiceDeAmigos]}</li>`;
    indiceDeAmigos++;
}
function limpiarInput() {
    inputAmigo.value = "";
}
function condicionInicial() {
    asignarTextoElemento(".section-title", "Introduce el nombre de tu amigo:");
}