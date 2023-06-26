import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { useEffect } from 'react';

function GerenciarUsuarios(){
  useEffect(() => {
    if(!cookie.get('myCookie')){
      router.push('/')
    }
  }, [cookie.get('myCookie')])

  return (
    <>
      <Head>
        <title>StackTec - Gerenciar Usuários</title>
      </Head>
    </>
  )
}

export default GerenciarUsuarios