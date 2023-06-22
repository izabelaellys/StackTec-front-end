const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

if (urlParams.has('id')) {
  const url = "http://localhost:8080/api/post/v1.1/" + urlParams.get('id')
  console.log(url)

  //Faz a requisição do post
  var myHeaders = new Headers();
  myHeaders.append("Cookie", "bezkoder=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huYmFyZGVlbjE4QGZhdGVjLnNwLmdvdi5iciIsImlhdCI6MTY4NzMwODQ0NCwiZXhwIjoxNjg3Mzk0ODQ0fQ.IFv9jMknzll1Z6WI5_vjwWLpGP-DmZraD_J6XF8xcSQLlK_ccjIjUH2g2a20Va21SDt-13_ON9Ug5PbMS0evaw; Path=/api; Max-Age=60; Expires=Wed, 21 Jun 2023 00:48:24 GMT; HttpOnly");

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

