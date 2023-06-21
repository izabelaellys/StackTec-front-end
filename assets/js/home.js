const questionCardContainer = document.querySelector('.questioncardcontainer')

if(!localStorage.getItem('myCookie')){
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
}

