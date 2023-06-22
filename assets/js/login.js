const loginForm = document.getElementById("formLogin");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);

  // Convert form data to JSON object
  const jsonObject = {};
  for (const [key, value] of formData.entries()) {
    jsonObject[key] = value;
  }
        
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(jsonObject),
    redirect: 'follow'
  };

  fetch("http://localhost:8080/auth/signin", requestOptions)
    .then(response => response.json())
    .then(result => {
      // Salva os dados da requisição no localstorage
      localStorage.setItem('myCookie', result.cookie);
      localStorage.setItem('name', result.nome)      
      localStorage.setItem('email', result.email)
      localStorage.setItem('roles', result.roles[0])
      // Redireciona para a página incial
      window.location.href = "/";
    })
    .catch(error => console.log('error', error));
});