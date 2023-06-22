const questionCardContainer = document.querySelector('.questioncardcontainer')

// Necessário para pegar os parametros da página e configurar quantos itens serão por página
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let atualPage = !urlParams.has('page') ? 1 : urlParams.get('page')
const itemsByPage = 2

if (!localStorage.getItem('myCookie')) {
  document.querySelector('.mensagemmodal').innerHTML = '<p>Por favor, faça login para você possa acessar todo o conteúdo dos posts</p>'

  // Remove as tags
  document.querySelector('.tagcontainer').classList.remove('active')
  // Remove o post action
  document.querySelector('.postaction').classList.remove('active')
  // Remove o padding do body
  document.querySelector('body').classList.remove('active')


  var requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };

  fetch("http://localhost:8080/api/post/v1.1/getFirstTenPosts", requestOptions)
    .then(response => response.json())
    .then(result => {
      questionCardContainer.innerHTML += ''
      result.forEach(item => {
        questionCardContainer.innerHTML += `<div class="questioncard"><div><p>- votos</p><p class="resposta">- resposta</p></div><div class="questioncontent"><a href="/">${item.titulo}</a></div></div>`
      });

      const allQuestionCard = document.querySelectorAll('.questioncard')
      allQuestionCard.forEach(item => {
        item.addEventListener("click", () => {
          document.querySelector('.modal').classList.add('active')
        })
      })
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


  // Insere posts
  document.querySelector('.postaction').classList.add('active')
  document.querySelector('body').classList.add('active')
  let orderBy = 'recentes' //possiveis (antigos, maisvotados e recentes)
  const allFilterButton = document.querySelectorAll('.filterbutton')
  allFilterButton.forEach(item => {
    item.addEventListener("click", () => {
      allFilterButton.forEach(button => {
        button.classList.remove('active')
      })
      item.classList.add('active')
      orderBy = item.getAttribute('data-value')
    })
  })


  var myHeaders2 = new Headers();
  myHeaders2.append("Cookie", localStorage.getItem('myCookie'));
  myHeaders2.append("Content-Type", "application/json");

  var requestOptions = {
    method: 'POST',
    headers: myHeaders2,
    redirect: 'follow'
  };

  url = "http://localhost:8080/api/post/v1.1/getPageable/" + atualPage + "/" + itemsByPage + "/" + orderBy

  fetch(url, requestOptions)
    .then(response => response.json())
    .then(result => {
      console.log(result)

      const simulaDados = {
        "totalPages": 2,
        "maxResults": 8,
        "postDtos": [
          {
            "id": 1,
            "titulo": "Post 1",
            "criadoEm": "2023-06-14T01:17:26.950+0000"
          },
          {
            "id": 2,
            "titulo": "Post 2",
            "criadoEm": "2023-06-14T01:17:26.950+0000"
          },
          {
            "id": 3,
            "titulo": "Post 11",
            "criadoEm": "2023-06-14T01:17:26.950+0000"
          },
          {
            "id": 4,
            "titulo": "Post 1",
            "criadoEm": "2023-06-14T01:17:26.950+0000"
          }
        ]
      }

      /* Declaração de const e variáveis */
      // Dados para a paginação
      const questionCardContainer = document.querySelector('.questioncardcontainer')
      const totalPages = simulaDados.totalPages
      const paginationNumber = document.querySelector('.numberscontainer')
      /* Fim da declaração de const e variáveis */

      // Insere as tags selecionadas na página tags
      simulaDados.postDtos.forEach((item) => {
        questionCardContainer.innerHTML += `<div class="questioncard"><div><p>- votos</p><p class="resposta">- resposta</p></div><div class="questioncontent"><a href="/post.html?id=${item.id}">${item.titulo}</a></div></div>`
      })

      // Insere números e outros dados da paginação
      const activePageNumber = (number) => {
        return `<a href="/index.html?page=${number}" title="Página ${number}"><p>[</p><p class="pagenumber">${number}</p><p>]</p></a>`
      }

      const pageNumber = (number) => {
        return `<a href="/index.html?page=${number}" title="Página ${number}"><p class="pagenumber">${number}</p></a>`
      }

      for (let i = 1; i <= totalPages; i++) {
        if (i == atualPage) {
          paginationNumber.innerHTML += activePageNumber(i)
        } else {
          paginationNumber.innerHTML += pageNumber(i)
        }
      }

      // Botões de avançar e retroceder paginação
      const paginacaoAnterior = document.querySelector('.paginacaoAnterior')
      const paginacaoProxima = document.querySelector('.paginacaoProxima')
      const paginacaoUltima = document.querySelector('.paginacaoUltima')
      const pageAnterior = (atualPage - 1) >= 1 ? atualPage - 1 : 1
      const pageProxima = (atualPage + 1) <= totalPages ? atualPage + 1 : totalPages

      paginacaoAnterior.href = `/index.html?page=${pageAnterior}`
      paginacaoProxima.href = `/index.html?page=${pageProxima}`
      paginacaoUltima.href = `/index.html?page=${totalPages}`
    })
    .catch(error => console.log('error', error));

}