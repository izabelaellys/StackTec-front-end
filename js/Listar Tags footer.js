function gerarBotoesPaginacao(totalPaginas, paginaAtual) {
  var paginacao = document.getElementById("paginacao");
  paginacao.innerHTML = "";
  for (var i = 1; i <= totalPaginas; i++) {
    var botao = document.createElement("button");
    botao.innerHTML = i;
    if (i === paginaAtual) {
      botao.className = "ativo";
    }
    botao.addEventListener("click", function() {
      mudarPagina(this.innerHTML);
    });
    paginacao.appendChild(botao);
  }
}

function mudarPagina(pagina) {
  var tabela = document.getElementById("tabela-dados");
  var linhas = tabela.getElementsByTagName("tr");
  var totalLinhas = linhas.length - 1; // desconta a linha de cabeçalho
  var linhasPorPagina = 10; // define o número de linhas por página
  var totalPaginas = Math.ceil(totalLinhas / linhasPorPagina);
  var primeiraLinha = (pagina - 1) * linhasPorPagina + 1;
  var ultimaLinha = Math.min(primeiraLinha + linhasPorPagina - 1, totalLinhas);
  for (var i = 1; i <= totalLinhas; i++) {
    if (i < primeiraLinha || i > ultimaLinha) {
      linhas[i].style.display = "none";
    } else {
      linhas[i].style.display = "";
    }
  }
  gerarBotoesPaginacao(totalPaginas, pagina);
}

gerarBotoesPaginacao(10, 1); // exibe 10 páginas e mostra a primeira
mudarPagina(1); // mostra a primeira página da tabela



const footerText = document.getElementById('footer-text');
let intervalID;

function typeFooterText() {
  const text = 'Feito por um bando de Guaxinins Raivosos';
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
  footerText.textContent = '';
}

window.addEventListener('beforeunload', () => {
  clearInterval(intervalID);
  clearFooterText();
});

window.addEventListener('load', () => {
  setInterval(() => {
    clearFooterText();
    typeFooterText();
  }, 10000);
});