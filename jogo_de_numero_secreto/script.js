let numero_secreto = parseInt(Math.random() * 1000 + 1);
let tentativa = 0

let paragrafo = document.querySelector("p");
let input = document.querySelector("input");
let reiniciar_id = document.getElementById("reiniciar");

function verificarChute() {
  let chute = input.value;

  if (chute == numero_secreto) {

    if (tentativa == 0) {
    paragrafo.innerHTML = "Você acertou o número secreto!";
    reiniciar_id.disabled = false;
    return
    } else {
    paragrafo.innerHTML = tentativa > 1 ? `Você acertou o número secreto com ${tentativa} tentativas.` : `Você acertou o número secreto com ${tentativa} tentativa.`;
    reiniciar_id.disabled = false;
    return
    }

  }

  if (numero_secreto > chute) {
      paragrafo.innerHTML = "O número secreto é maior! Tente novamente.";
      tentativa++;
  } else {
      paragrafo.innerHTML = "O número secreto é menor! Tente novamente.";
      tentativa++;
  }

  if(chute > 1000 || chute < 1){
    paragrafo.innerHTML = "Digite apenas um número entre 1 a 1000.";
  }

  input.value = "";
}

function reiniciarBotao() {
  numero_secreto = parseInt(Math.random() * 1000) + 1;
  paragrafo.innerHTML = "Escolha um número entre 1 a 1000";
  reiniciar_id.disabled = true;
  input.value = "";
  tentativa = 0;
}


