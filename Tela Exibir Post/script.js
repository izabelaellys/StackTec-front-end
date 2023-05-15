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
  typeFooterText();
  setInterval(() => {
    clearFooterText();
    typeFooterText();
  }, 10000);
});