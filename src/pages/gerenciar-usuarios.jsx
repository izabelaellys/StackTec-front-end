import axios from 'axios'
import Head from 'next/head'
import { useRouter } from 'next/router';
import cookie from 'js-cookie';
import { useEffect } from 'react';
import UserList from '@/components/UserList';

function GerenciarUsuarios(){
  const router = useRouter();
  
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
      <UserList />
    </>
  )
}

export default GerenciarUsuarios