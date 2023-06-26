import EditeUser from '@/components/EditeUser'
import cookie from 'js-cookie'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import Head from 'next/head';

function AtualizarDados(){
  const [nome, setNome] = useState()
  const [email, setEmail ] = useState()
  const router = useRouter()


  useEffect(() => {
    if(!cookie.get('myCookie')){
      router.push('/')
    }
  }, [cookie.get('myCookie')])

  useEffect(() => {
    setNome(cookie.get('name'))
    setEmail(cookie.get('email'))
  }, [])

  return (
    <>
      <Head>
        <title>StackTec - Atualizar dados</title>
      </Head>
      <EditeUser name={nome} email={email}/>
    </>
  )
}

export default AtualizarDados