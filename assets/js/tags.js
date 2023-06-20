let simulaDados = {
  "totalPages": 4,
  "maxResults": 2,
  "tagDtos": [
      {
          "id": 1,
          "nome": "Java",
          "qtdePosts": 0
      },
      {
          "id": 2,
          "nome": "POO",
          "qtdePosts": 0
      },
      {
          "id": 3,
          "nome": "JS",
          "qtdePosts": 0
      },
      {
          "id": 4,
          "nome": "MPCT",
          "qtdePosts": 0
      }
  ]
}

/* Declaração de const e variáveis */
// Dados para pegar os parametros da página
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

// Dados para a paginação
const tagContent = document.querySelector('.tagcontent')
const itemsByPage = 4
const totalPages = simulaDados.maxResults
let atualPage = !urlParams.has('page') ? 1 : urlParams.get('page') <= totalPages ? urlParams.get('page') : totalPages
const paginationNumber = document.querySelector('.numberscontainer')

/* Fim da declaração de const e variáveis */

// Insere as tags selecionadas na página tags
simulaDados.tagDtos.forEach((item) => {
  tagContent.innerHTML += '<div class="tagcard" data-value=' + item.nome + '><p>' + item.nome + '</p><div class="viewcontainer"><img src="assets/img/view.png" alt=""></div></div>'
})

// Insere números e outros dados da paginação
const activePageNumber = (number) => {
  return `<a href="/tags.html?page=${number}" title="Página ${number}"><p>[</p><p class="pagenumber">${number}</p><p>]</p></a>`
}

const pageNumber = (number) => {
  return `<a href="/tags.html?page=${number}" title="Página ${number}"><p class="pagenumber">${number}</p></a>`
}

for (let i = 1; i <= totalPages; i++) {
  if (i == atualPage) {
    paginationNumber.innerHTML += activePageNumber(i)
  } else {
    paginationNumber.innerHTML += pageNumber(i)
  }
}

// Ativa filtro por tags
const allTagCards = document.querySelectorAll('.tagcard')
const tagsSelecionadasContainer = document.querySelector('.tags-selecionadas-container')
let tagsSelecionadas = []

if (localStorage.getItem('tagsSelecionadas')) {
  localStorage.getItem('tagsSelecionadas').split(',').forEach((item) => {
    tagsSelecionadas.push(item)
  })
}

tagsSelecionadas.forEach(tag => tagsSelecionadasContainer.innerHTML += `<button>${tag}</button>`)

allTagCards.forEach((item) => {
  if (tagsSelecionadas.includes(item.getAttribute('data-value'))) {
    item.classList.add('active')
  }

  item.addEventListener('click', () => {
    item.classList.toggle('active')

    if (!tagsSelecionadas.includes(item.getAttribute('data-value'))) {
      
      if(tagsSelecionadas.length < 5){
        tagsSelecionadas.push(item.getAttribute('data-value'))
        document.querySelector('.alert').classList.remove('active')
      }else{
        document.querySelector('.alert').classList.add('active')
        item.classList.remove('active')
      }
    }else{
      document.querySelector('.alert').classList.remove('active')
      tagsSelecionadas = tagsSelecionadas.filter(tag => tag !== item.getAttribute('data-value'))
    }

    tagsSelecionadasContainer.innerHTML = ''
    tagsSelecionadas.forEach(tag => tagsSelecionadasContainer.innerHTML += `<button class="tagbutton">${tag}</button>`)

    localStorage.setItem('tagsSelecionadas', tagsSelecionadas)
  })
})


var myHeaders = new Headers();
myHeaders.append("Cookie", "bezkoder=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqb2huYmFyZGVlbjE4QGZhdGVjLnNwLmdvdi5iciIsImlhdCI6MTY4NzIyNDYyOSwiZXhwIjoxNjg3MzExMDI5fQ.D4oalIOgcWsZm3mE_1GPxIk9yGuel-7-ctUE8N5S1PlvlEm2_knPf0SzYfHH2yb9bQ6JgZOM9fWkRKYo2gM4ZA; Path=/api; Max-Age=60; Expires=Tue, 20 Jun 2023 01:31:29 GMT; HttpOnly");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

url = "http://localhost:8080/tag/v1.1/paginated-desc/" + atualPage + "/" + itemsByPage

fetch("http://localhost:8080/tag/v1.1/paginated-desc/1/4", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));