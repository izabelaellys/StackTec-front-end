// Necessário para pegar os parametros da página e configurar quantos itens serão por página
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let atualPage = !urlParams.has('page') ? 1 : urlParams.get('page')
const itemsByPage = 2

var myHeaders = new Headers();
myHeaders.append("Cookie", "bezkoder=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbkBmYXRlYy5zcC5nb3YuYnIiLCJpYXQiOjE2ODczMDMyMDUsImV4cCI6MTY4NzM4OTYwNX0.OlPlPeE2VUoTTDLFz2t7u8A36LnDgHIACwO5e58VyTLTCntWAoxk8BmMYDNVz79QgE_ymb6gUv3qhf3dCsVhKw; Path=/api; Max-Age=60; Expires=Tue, 20 Jun 2023 23:21:05 GMT; HttpOnly");

var requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

url = "http://localhost:8080/api/tag/v1.1/paginated-desc/" + atualPage + "/" + itemsByPage

fetch(url, requestOptions)
  .then(response => response.json())
  .then(result => {
    /* Declaração de const e variáveis */
    // Dados para a paginação
    const tagContent = document.querySelector('.tagcontent')
    const totalPages = result.maxResults
    const paginationNumber = document.querySelector('.numberscontainer')
    /* Fim da declaração de const e variáveis */

    // Insere as tags selecionadas na página tags
    result.tagDtos.forEach((item) => {
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

    // Botões de avançar e retroceder paginação
    const paginacaoAnterior = document.querySelector('.paginacaoAnterior')
    const paginacaoProxima = document.querySelector('.paginacaoProxima')
    const paginacaoUltima = document.querySelector('.paginacaoUltima')
    const pageAnterior = (atualPage - 1 ) >= 1 ? atualPage - 1 : 1
    const pageProxima = (atualPage + 1 ) <= totalPages ? atualPage + 1 : totalPages

    paginacaoAnterior.href = `/tags.html?page=${pageAnterior}`
    paginacaoProxima.href = `/tags.html?page=${pageProxima}`
    paginacaoUltima.href = `/tags.html?page=${totalPages}`


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

          if (tagsSelecionadas.length < 5) {
            tagsSelecionadas.push(item.getAttribute('data-value'))
            document.querySelector('.alert').classList.remove('active')
          } else {
            document.querySelector('.alert').classList.add('active')
            item.classList.remove('active')
          }
        } else {
          document.querySelector('.alert').classList.remove('active')
          tagsSelecionadas = tagsSelecionadas.filter(tag => tag !== item.getAttribute('data-value'))
        }

        tagsSelecionadasContainer.innerHTML = ''
        tagsSelecionadas.forEach(tag => tagsSelecionadasContainer.innerHTML += `<button class="tagbutton">${tag}</button>`)

        localStorage.setItem('tagsSelecionadas', tagsSelecionadas)
      })
    })
  })
  .catch(error => console.log('error', error));