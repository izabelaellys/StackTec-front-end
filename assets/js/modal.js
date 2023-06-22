// Responsável por fechar o modal ao seu devido tempo
const modal = document.querySelector('.modal')
const closeButton = document.querySelector('.close')

closeButton.addEventListener('click', () => modal.classList.remove('active'))

window.onclick = (event) => {
  if (event.target == modal) {
    modal.classList.remove('active')
  }
}