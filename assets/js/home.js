const questionCardContainer = document.querySelector('.questioncardcontainer')

if (!localStorage.getItem('myCookie')) {
  // Remove as tags
  document.querySelector('.tagcontainer').classList.remove('active')


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/post/v1.1/getFirstTenPosts", requestOptions)
    .then(response => response.json())
    .then(result => {
      questionCardContainer.innerHTML += ''
      result.forEach(item => {
        questionCardContainer.innerHTML += `<div class="questioncard"><div class="questioncontent"><a href="/">${item.titulo}</a></div></div>`
      });
    })
    .catch(error => console.log('error', error));
} else {
  // Insere as tags
  document.querySelector('.tagcontainer').classList.add('active')
  const buttonContainer = document.querySelector('.buttoncontainer')


  var myHeaders = new Headers();
  myHeaders.append("Cookie", localStorage.getItem('myCookie'));

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/tag/v1.1/paginated-desc/1/10", requestOptions)
    .then(response => response.json())
    .then(result => {
      buttonContainer.innerHTML = ''

      result.tagDtos.forEach(item => {
        buttonContainer.innerHTML += `<a href="/postsbytag.html?tag=${item.nome}" class="btn-tag">${item.nome}</a>`
      })

      buttonContainer.innerHTML += '<a href="/tags.html" class="tag-last-button">...</a>'
    })
    .catch(error => console.log('error', error));
}