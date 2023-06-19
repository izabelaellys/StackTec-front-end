const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('id')) {
  const url = "http://localhost:8080/api/post/v1.1/" + urlParams.get('id')
  console.log(url)

  //Faz a requisição do post
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "bezkoder=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huYmFyZGVlbjE4QGZhdGVjLnNwLmdvdi5iciIsImlhdCI6MTY4NzA0MTM0MywiZXhwIjoxNjg3MTI3NzQzfQ.hdE-4eU7v1syb-JmODMxzbMduXmGB_opNzwSR9iMKPbQqFyXWa_NrNfDdf71AXwPv-YXaxxIu29kWKt6f8q1pg; Path=/api; Max-Age=60; Expires=Sat, 17 Jun 2023 22:36:43 GMT; HttpOnly");

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };



  fetch(url, requestOptions)
    .then(response => {
      if (response.status >= 400 && response.status < 500) {
        console.log('Page 404')
      }
      return response.text()
    })
    .then(result => {
      const responseObject = JSON.parse(result)
      if (responseObject.status == 201) {
        document.title = "StackTec - " + responseObject.titulo //Troca o título da página
        document.querySelector("h1").innerHTML = responseObject.titulo //Insere o título do post
        document.querySelector(".postbody").innerHTML = responseObject.postbody //Insere o corpo do post
        let titlecomentarios = document.querySelector('.comentariotitle')
        let bodycomentarios = document.querySelector('.comentariosection')
        if (responseObject.comentarios.length == 0) {
          titlecomentarios.innerHTML = 'Comentarios (0)'
        } else {
          titlecomentarios.innerHTML = 'Comentarios (' + responseObject.comentarios.length + ')'
          responseObject.comentarios.forEach(item => {
            bodycomentarios.innerHTML += '<div class="comentariocard">' + item + '</div>'
          })
        }
      }
    })
    .catch(error => console.log('error', error));
} else {
  console.log('Não há parametros')
}

