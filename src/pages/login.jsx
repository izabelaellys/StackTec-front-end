import FormsLogin from "@/components/FormsLogin"
import Head from "next/head"

function Login(){
  return(
    <>
      <Head>
        <title>StackTec - Login</title>
      </Head>
      <FormsLogin />
    </>
  )
}

export default Login