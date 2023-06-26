import FormsCadastro from "@/components/FormsCadastro"
import { useRouter } from 'next/router';
import cookie from 'js-cookie'
import { useEffect} from "react";
import Head from "next/head";

function Cadastro(){
  const router = useRouter()

  useEffect(() => {
    if(cookie.get('myCookie')){
      router.push('/')
    }
  }, [cookie.get('myCookie')])

  return(
    <>
      <Head>
        <title>StackTec - Cadastro</title>
      </Head>
      <FormsCadastro />
    </>
  )
}

export default Cadastro