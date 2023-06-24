import { useState } from "react"
import TinyMCEEditor from "../TinyMCEEditor/TinyMCEEditor"
import { StyledSinglePost } from "./styles"
import Button from "../Button"

const SinglePost = ({data}) => {
  const [respostaEditor, setEditorResposta ] = useState()
  console.log(data)

  const handleSave = () => {
    console.log(respostaEditor); // or perform any desired action
  };
  
  return(
    <StyledSinglePost>
      <h1>{data?.titulo}</h1>
      <div dangerouslySetInnerHTML={{__html: data?.descricao}} />

      <div className="postvotos">
        <p>Quantidade de votos: {data?.votos}</p>
        <Button deactive={data?.votado} title="Votar" className={"btn-vote"}/>
      </div>
      <div className="posttags">
        <h2>Tags ({data?.tags.length})</h2>
        {data?.tags.map((tag) => {
          return <a href={'postsbytag?tag=' + tag}>{tag}</a>
        })}
      </div>
      <div>
        <h2>Respostas ({data?.respostas.length})</h2>

        {data?.respostas.map((resposta) => {return <div dangerouslySetInnerHTML={{__html: resposta}} />})}
        <div className="editor">
          <TinyMCEEditor setEditorContent={setEditorResposta} />
          <Button event={handleSave} title='Enviar' />
        </div>
      </div>
      <div className="postComentarios">
        <h2>Comentários ({data?.comentarios.length})</h2>
        {data?.comentarios.map((comentario) => {return <p>{comentario}</p>})}
        <div className="editor">
          <textarea placeholder="Fazer comentário"></textarea>
          <Button title='Enviar' />
        </div>
      </div>
    </StyledSinglePost>
  )
}

export default SinglePost