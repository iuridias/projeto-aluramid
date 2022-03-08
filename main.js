/* Minha forma de fazer:
function tocaSom(som) {
  som.play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');
const listaDeSons = document.querySelectorAll('audio');

for (let i=0; i < listaDeTeclas.length; i++) {
  listaDeTeclas[i].onclick = function () { tocaSom(listaDeSons[i]) };
}
*/

// Forma do curso
function tocaSom(seletorAudio) {
  const elemento = document.querySelector(seletorAudio);

  if (elemento && elemento.localName === 'audio') {
    elemento.play();
  } else {
    console.log('Elemento inválido.')
  }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i < listaDeTeclas.length; i ++) {

  const tecla = listaDeTeclas[i];
  const instrumento = tecla.classList[1];
  
  //template string
  const idAudio = `#som_${instrumento}`;

  tecla.onclick = function () { tocaSom(idAudio);  }
  
  tecla.onkeydown = function (evento) {

    if (evento.code === "Enter" || evento.code === "Space") {
      tecla.classList.add('ativa');
    }
  }

  tecla.onkeyup = function () { tecla.classList.remove('ativa'); }

}
