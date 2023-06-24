import EditeUser from '@/components/EditeUser'
import cookie from 'js-cookie'
import { useEffect, useState } from 'react'

function AtualizarDados(){
  const [nome, setNome] = useState()
  const [email, setEmail ] = useState()

  useEffect(() => {
    setNome(cookie.get('name'))
    setEmail(cookie.get('email'))
  }, [])

  return (
    <>
      <EditeUser name={nome} email={email}/>
    </>
  )
}

export default AtualizarDados