import { useEffect, useState } from "react";
import TinyMCEEditor from "../TinyMCEEditor/TinyMCEEditor";
import { StyledSinglePost } from "./styles";
import Button from "../Button";
import axios from "axios";
import cookie from "js-cookie";

const SinglePost = ({ data }) => {
  const [autorId, setAutorId] = useState();
  const [comentarioEditor, setComentarioEditor] = useState();
  const [MyCookie, setMyCookie] = useState()
  const [respostaEditor, setEditorResposta] = useState();
  const [postId, setPostId] = useState();
  const [comentarioMsg, setComentarioMsg] = useState(0);
  console.log(data);

  const handleSave = () => {
    console.log(respostaEditor);
  };

  useEffect(() => {
    setAutorId(cookie?.get("id"));
    setPostId(data?.id);
    setMyCookie(cookie?.get("myCookie"))
  }, [cookie?.get("id"), data?.id, cookie?.get("myCookie")]);

  useEffect(() => {
    // Limpa todos as mensagens de erro
    setTimeout(() => {
      setComentarioMsg(0);
    }, 7000);
  }, [comentarioMsg]);

  const makeComment = async (e) => {
    e.preventDefault();

    if(!comentarioEditor){
      setComentarioMsg(2)
      return
    }

    try {
      const response = await axios.post("/api/create-comment", {
        MyCookie,
        autorId,
        postId,
        comentarioEditor,
      });

      setComentarioEditor('')
      setComentarioMsg(1)
    } catch (error) {
      setComentarioMsg(2)
      console.log(error);
    }
  };

  return (
    <StyledSinglePost>
      <h1>{data?.titulo}</h1>
      <div dangerouslySetInnerHTML={{ __html: data?.descricao }} />

      <div className="postvotos">
        <p>Quantidade de votos: {data?.votos}</p>
        <Button deactive={data?.votado} title="Votar" className={"btn-vote"} />
        <Button deactive={data?.votado} title="Retirar Voto" className={"btn-vote-del"} />
      </div>
      <div className="posttags">
        <h2>Tags ({data?.tags.length})</h2>
        {data?.tags.map((tag) => {
          return <a href={"postsbytag?tag=" + tag}>{tag}</a>;
        })}
      </div>
      <div>
        <h2>Respostas ({data?.respostas.length})</h2>

        {data?.respostas.map((resposta) => {
          return <div dangerouslySetInnerHTML={{ __html: resposta }} />;
        })}
        <div className="editor">
          {console.log(JSON.stringify(respostaEditor))}
          <TinyMCEEditor setEditorContent={setEditorResposta} />
          <Button event={handleSave} title="Enviar" />
        </div>
      </div>
      <div className="postComentarios">
        <h2>Comentários ({data?.comentarios.length})</h2>
        {data?.comentarios.map((comentario) => {
          return (
            <div className="comentariocard">
              <p className="comentarioautor">{comentario.autorApelido}</p>
              <p>{comentario.texto}</p>
            </div>
          );
        })}
        <div className="editor">
          <textarea
            placeholder="Fazer comentário"
            value={comentarioEditor}
            onChange={(e) => setComentarioEditor(e.target.value)}
          ></textarea>
          <p className={comentarioMsg == 1 ? "sucess" : ""}>
            Comentário Enviado com sucesso
          </p>
          <p className={comentarioMsg == 2 ? "error" : ""}>
            Desculpe! Não foi possível enviar seu comentário
          </p>
          <Button event={makeComment} title="Enviar" />
        </div>
      </div>
    </StyledSinglePost>
  );
};

export default SinglePost;
