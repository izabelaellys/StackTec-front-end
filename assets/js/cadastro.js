var loginForm = document.querySelector("#register-form")

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const email = document.querySelector("#email").value;
  let emailPattern = /@fatec\.sp\.gov\.br$/;
  const password = document.querySelector("#password").value;
  const confirmPassword = document.querySelector("#confirm-password").value;
  let hasError = false

  // Valida se o email possui o dominio @fatec.sp.gov.br e se a senha e a confirmação de senha são iguais
  if (!emailPattern.test(email)) {
    document.querySelector("#email-error").classList.add('active')
    hasError = true
  }

  if (password !== confirmPassword) {
    document.querySelector('#password-error').classList.add('active')
    hasError = true
  }

  if (hasError) {
    esperaMsgError()
    return // Encerra a função aqui se houver erro
  }

  var formData = new FormData(loginForm);

  // Convert form data to JSON object
  var jsonObject = {};
  for (const [key, value] of formData.entries()) {
    if (key !== 'confirm-password') { // Exclude 'confirm-password' field
      jsonObject[key] = value;
    }
  }

  // Faz a requisição na api
  var myHeaders = new Headers();
  myHeaders.append("accept", "application/json");
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(jsonObject),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/auth/signup", requestOptions)
    .then(response => {
      if (response.status >= 400 && response.status < 500) {
        document.querySelector('#generic-error').classList.add('active')
      } else if (response.status == 201) {
        // Oculta o formulário e exibe a mensagem de sucesso
        loginForm.classList.add('deactive')
        document.querySelector('.sucess').classList.add('active')

        setTimeout(() => {
          window.location.href = "/";
        }, "5000")
      }
      esperaMsgError()
      return response.text()
    })
    .then(result => {
      const responseObject = JSON.parse(result)
      if(responseObject?.message){
        document.querySelector('#duplicate-email-error').classList.add('active')
        return
      }

      // Salva os dados da requisição no localstorage
      localStorage.setItem('myCookie', responseObject.cookie);
      localStorage.setItem('name', responseObject.nome)      
      localStorage.setItem('email', responseObject.email)
      localStorage.setItem('roles', responseObject.roles[0])
    })
    .catch(error => console.log('error', error));
});


// Seleciona as mensagens de erro e se houver alguma ativa depois de uma espera de 5segundos ela é desativada
const esperaMsgError = () => {
  const allErrorMsg = document.querySelectorAll('.forms-error')

  allErrorMsg.forEach((item) => {
    if (item.classList.contains('active')) {
      setTimeout(() => {
        item.classList.remove('active')
      }, "5000")
      return
    }
  })
}