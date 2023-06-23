import { useEffect, useState } from "react"
import Button from "../Button"
import { StyledHeader } from "./styles"

import cookie from 'js-cookie'


const Header = () => {
  const [nome, setNome ] = useState()
  const [logado, setLogado] = useState(false)

  useEffect(() => {
    const nameValue = cookie.get('name')
    if(nameValue){ 
      setNome(nameValue)
      setLogado(true)
    }else{
      setNome('')
      setLogado(false)
    }
  },[nome, cookie.get('name')])

  const makeLogout = (e) => {
    e.preventDefault()
    cookie.remove('myCookie')
    cookie.remove('name')
    cookie.remove('email')
    cookie.remove('roles')
    setNome('')
  }

  return (
    <StyledHeader>
      <a href="/" className="logo"><img src="logo.png" alt="logo" /></a>
      <form className="caixa-pesquisa">
        <input type="text" placeholder="O que você está buscando?" />
          <span className="search-icon"><svg className="svgIcon-use" width="30" height="40" viewbox="0 -5 28 15">
            <path
              d="M20.067 18.933l-4.157-4.157a6 6 0 1 0-.884.884l4.157 4.157a.624.624 0 1 0 .884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z">
            </path>
          </svg></span>
      </form>
      <div className={!logado ? 'loginsection active' : 'loginsection'}>
        <Button link="/login" title='Login' />
        <Button link="/cadastro" title='Cadastre-se' />
      </div>
      <div className={logado ? 'logadosection active' : 'logadosection'}>
        <a href="">
          <img src="people.png" alt="" />
        </a>
        <p id="username">Olá, {nome}</p>
        <button className="btn" onClick={(e) => makeLogout(e)}>Sair</button>
      </div>
    </StyledHeader>
  )
}

export default Header