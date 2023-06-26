import EditeUserByAdmin from "@/components/EditeUserByAdmin"
import Head from "next/head"


function EditarUsuario(){
  return (
    <>
      <Head>
        <title>StackTec - Gerenciar Usuários</title>
      </Head>
      <EditeUserByAdmin />
    </>
  )
}

export default EditarUsuario