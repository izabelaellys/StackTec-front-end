const sectionLogado = document.querySelector('.logadosection')
const sectionLogar = document.querySelector('.loginsection')
const menuComum = document.querySelector('.menu')
const userName = document.querySelector('#username')
const dataName = localStorage.getItem('name')
const logoutButton = document.querySelector('#logout')


if(dataName){
  sectionLogado.classList.add('active')
  sectionLogar.classList.remove('active')
  menuComum.classList.add('active')
  userName.innerHTML += dataName
}else{
  sectionLogado.classList.remove('active')
  sectionLogar.classList.add('active')
  menuComum.classList.remove('active')
}


// Realiza o logout
logoutButton.addEventListener('click', () => {
  localStorage. removeItem('myCookie')
  localStorage. removeItem('name')
  localStorage. removeItem('email')
  localStorage. removeItem('roles')
  window.location.reload(true)
})