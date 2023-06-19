document.addEventListener("DOMContentLoaded", function(){
  activeMenus()
});

const activeMenus = () => {
  const sectionLogado = document.querySelector('.logadosection')
  const sectionLogar = document.querySelector('.loginsection')
  const menuComum = document.querySelector('.menu')
  const menuAdmin = document.querySelector('.menu-admin')
  const userName = document.querySelector('#username')
  const dataName = localStorage.getItem('name')
  const logoutButton = document.querySelector('#logout')


  if (dataName) {
    sectionLogado.classList.add('active')
    sectionLogar.classList.remove('active')
    userName.innerHTML += dataName
    if (localStorage.getItem('roles') == 'ROLE_ADMIN') {
      menuAdmin.classList.add('active')
    } else {
      menuComum.classList.add('active')
    }
  } else {
    sectionLogado.classList.remove('active')
    sectionLogar.classList.add('active')
    menuComum.classList.remove('active')
    menuAdmin.classList.remove('active')
  }

  // Realiza o logout
  logoutButton.addEventListener('click', () => {
    localStorage.removeItem('myCookie')
    localStorage.removeItem('name')
    localStorage.removeItem('email')
    localStorage.removeItem('roles')
    window.location.reload(true)
  })
}