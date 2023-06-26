import FormsCadastro from "@/components/FormsCadastro"
import { useRouter } from 'next/router';
import cookie from 'js-cookie'
import { useEffect} from "react";

function Cadastro(){
  const router = useRouter()

  useEffect(() => {
    if(cookie.get('myCookie')){
      router.push('/')
    }
  }, [cookie.get('myCookie')])

  return(
    <>
      <FormsCadastro />
    </>
  )
}

export default Cadastro