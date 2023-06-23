import { useEffect, useState } from "react"
import { StyledSideMenu } from "./styles"
import { useRouter } from 'next/router'

import cookie from 'js-cookie'

const SideMenu = () => {
  const router = useRouter()
  const [rule, setRule ] = useState()

  useEffect(() => {
    setRule(cookie.get('roles'))
  }, [])
  
  return (
    <StyledSideMenu className={rule == "ROLE_ADMIN" || rule == "ROLE_ALUNO" ? 'active' : ''}>
      <a href="/" className={router.pathname === '/' ? 'active' : ''}>
        <img src="icons/home.png" alt="Home" />
        Home
      </a>
      <a href="/tags" className={router.pathname === '/tags' ? 'active' : ''}>
        <img src="icons/tag.png" alt="Tags" />
        Tags
      </a>
      <a href="/atualizar-dados" className={router.pathname === '/atualizar-dados' ? 'active' : ''}>
        <img src="icons/perfil.png" alt="Atualizar dados" />
        Atualizar Dados
      </a>
      {rule == "ROLE_ADMIN" && <a href="/gerenciar-usuarios" className={router.pathname === '/gerenciar-usuarios' ? 'active' : ''}>
        <img src="icons/usuarios.png" alt="Gerenciar Usuarios" />
        Gerenciar Usuarios
      </a>}
    </StyledSideMenu>
  )
}

export default SideMenu;
