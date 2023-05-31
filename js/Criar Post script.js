const footerText = document.getElementById("footer-text");
let intervalID;

function typeFooterText() {
  const text = "Feito por um bando de Guaxinins Raivosos";
  let i = 0;

  intervalID = setInterval(() => {
    if (i < text.length) {
      footerText.textContent += text[i];
      i++;
    } else {
      clearInterval(intervalID);
    }
  }, 100);
}

function clearFooterText() {
  footerText.textContent = "";
}

window.addEventListener("beforeunload", () => {
  clearInterval(intervalID);
  clearFooterText();
});

window.addEventListener("load", () => {
  typeFooterText();
  setInterval(() => {
    clearFooterText();
    typeFooterText();
  }, 10000);
});

function verificarConteudo(event) {
  if (event.keyCode === 32) { // Verifica se a tecla pressionada é o espaço (código 32)
    event.preventDefault(); // Impede a digitação do espaço no campo de texto
    const input = event.target; // Obtém o elemento input
    const texto = input.value.trim(); // Remove espaços em branco do início e do fim do conteúdo

    const tagsContainer = document.getElementById('tags-container'); // Obtém o elemento pai para as tags
    const tags = tagsContainer.getElementsByTagName('span'); // Obtém todas as tags existentes

    if (texto !== '' && tags.length < 5) { // Verifica se o texto não está vazio e se o limite de 5 tags ainda não foi alcançado
      const tag = document.createElement('span'); // Cria o elemento span
      tag.textContent = texto; // Define o conteúdo do span como o texto digitado

      tagsContainer.appendChild(tag); // Adiciona a tag ao elemento pai

      input.value = ''; // Limpa o campo de texto

    }
  }
  if (tags.length + 1 === 5){
    inputElement.disabled = true;
  }
   
}

const inputElement = document.getElementById('itags');
inputElement.addEventListener('keydown', verificarConteudo);
