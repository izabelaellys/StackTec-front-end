import EditorCard from "@/components/EditorCard";
import cookie from "js-cookie";
import Head from "next/head";
import { useRouter } from 'next/router';
import { useEffect} from "react";

function Editor(){
  const router = useRouter()

  useEffect(() => {
    if(!cookie.get('myCookie')){
      router.push('/')
    }
  }, [cookie.get('myCookie')])
  
  return (
    <>
      <Head>
        <title>StackTec - Editor</title>
      </Head>
      <EditorCard />
    </>
  )
}

export default Editor