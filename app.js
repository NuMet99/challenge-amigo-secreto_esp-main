let listaAmigos = [];

const enterNombre = document.getElementById('amigo');
const mostrarLista = document.getElementById('listaAmigos');
const resultadoUI = document.getElementById('resultado');
const añadirBoton = document.querySelector('.button-add');

function asignarMensaje(elemento, mensaje) {
  document.querySelector(elemento).innerHTML = mensaje;
}

function agregarAmigo() {
  const nombre = enterNombre.value;

  if (nombre === '') {
    alert('Por favor, ingresa un nombre para poder añadirlo.');
    return;
  }

  if (listaAmigos.includes(nombre)) {
    alert('Este nombre ya ha sido agregado.');
    limpiarEntry();
    return;
  }

  listaAmigos.push(nombre);
  mostrarNombres();
  limpiarEntry();
}

function mostrarNombres() {
  let viewListado = '';

  for (let i = 0; i < listaAmigos.length; i++) {
    const nombre = listaAmigos[i];
    viewListado += `<li>${nombre}</li>`;
  }

  mostrarLista.innerHTML = viewListado; 
}

function sortearAmigo() {
  if (listaAmigos.length < 2) {
    asignarMensaje('#resultado', '<li>Necesitas al menos dos amigos para el sorteo.</li>');
    return;
  }

  alert(`Agregaste ${listaAmigos.length} amigos`);

  const nombRand = Math.floor(Math.random() * listaAmigos.length);
  const amigoSorteado = listaAmigos[nombRand];

  asignarMensaje('#resultado', `<li>¡El amigo secreto sorteado es: <b>${amigoSorteado}</b>!</li>`);
}

enterNombre.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    añadirBoton.click();
  }
});

function limpiarEntry() {
  enterNombre.value = '';
  enterNombre.focus();
}