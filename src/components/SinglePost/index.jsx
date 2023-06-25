import { useEffect, useState } from "react";
import TinyMCEEditor from "../TinyMCEEditor/TinyMCEEditor";
import { StyledSinglePost } from "./styles";
import Button from "../Button";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";

const SinglePost = ({ data }) => {
  const [autorId, setAutorId] = useState();
  const [comentarioEditor, setComentarioEditor] = useState();
  const [MyCookie, setMyCookie] = useState();
  const [respostaEditor, setEditorResposta] = useState();
  const [postId, setPostId] = useState();
  const [comentarioMsg, setComentarioMsg] = useState(0);
  const [comentarioRespostaMsg, setComentarioRespostaMsg] = useState(0);
  const router = useRouter();
  const [comentarioResposta, setComentarioResposta] = useState();
  console.log(data);

  const makeResposta = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/create-resposta", {
        MyCookie,
        autorId,
        postId,
        respostaEditor,
      });

      console.log(response);
      setTimeout(router.reload(window.location.pathname), 1000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setAutorId(cookie?.get("id"));
    setPostId(data?.id);
    setMyCookie(cookie?.get("myCookie"));
  }, [cookie?.get("id"), data?.id, cookie?.get("myCookie")]);

  useEffect(() => {
    // Limpa todos as mensagens de erro
    setTimeout(() => {
      setComentarioMsg(0);
    }, 7000);
  }, [comentarioMsg]);

  const makeVote = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/create-vote", {
        MyCookie,
        postId,
      });
      console.log(response);
      setTimeout(router.reload(window.location.pathname), 1000);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteVote = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/delete-vote", {
        MyCookie,
        postId,
      });

      console.log(response);
      setTimeout(router.reload(window.location.pathname), 1000);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(MyCookie);

  const makeComment = async (e) => {
    e.preventDefault();

    const respostaId = null;

    if (!comentarioEditor) {
      setComentarioMsg(2);
      return;
    }

    try {
      const response = await axios.post("/api/create-comment", {
        MyCookie,
        autorId,
        postId,
        comentarioEditor,
        respostaId,
      });

      setComentarioEditor("");
      setComentarioMsg(1);
      setTimeout(router.reload(window.location.pathname), 1000);
    } catch (error) {
      setComentarioMsg(2);
      console.log(error);
    }
  };

  const makeCommentResposta = async (respostaId) => {
    if (!comentarioResposta) {
      setComentarioRespostaMsg(2);
      return;
    }

    try {
      const response = await axios.post("/api/create-comment", {
        MyCookie,
        autorId,
        comentarioResposta,
        respostaId,
      });

      setComentarioResposta("");
      setComentarioRespostaMsg(1);
      setTimeout(router.reload(window.location.pathname), 1000);
    } catch (error) {
      console.log(error);
      setComentarioRespostaMsg(2);
    }
  };

  return (
    <StyledSinglePost>
      <h1>{data?.titulo}</h1>
      <div className="postvotos">
        <p>Votos: {data?.votos}</p>
        <Button
          deactive={data?.votado}
          title="Votar"
          className={"btn-vote"}
          event={makeVote}
        />
        <Button
          deactive={!data?.votado}
          title="Votado"
          className={"btn-vote-del"}
          event={deleteVote}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: data?.descricao }} />

      <div className="posttags">
        <h2>Tags ({data?.tags.length})</h2>
        {data?.tags.map((tag) => {
          return <a href={"posts-by-tag?tag=" + tag}>{tag}</a>;
        })}
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
      <div className="postresposta">
        <h2>Respostas ({data?.respostas.length})</h2>

        {data?.respostas?.map((resposta) => {
          return (
            <div
              className={
                resposta?.aceita
                  ? "respostacontainer active"
                  : "respostacontainer"
              }
            >
              <div dangerouslySetInnerHTML={{ __html: resposta?.descricao }} />
              <div className="comentariosResposta">
                <h3>Comentários ( {resposta?.comentarios?.length} )</h3>
                {resposta?.comentarios?.map((comentario) => {
                  return (
                    <>
                      <p className="comentarioautor">
                        {comentario.autorApelido}
                      </p>
                      <p>{comentario.texto}</p>
                    </>
                  );
                })}
              </div>
              <div className="editor">
                <textarea
                  placeholder="Fazer comentário"
                  value={comentarioResposta}
                  onChange={(e) => setComentarioResposta(e.target.value)}
                ></textarea>
                <p className={comentarioRespostaMsg == 1 ? "sucess" : ""}>
                  Comentário Enviado com sucesso
                </p>
                <p className={comentarioRespostaMsg == 2 ? "error" : ""}>
                  Desculpe! Não foi possível enviar seu comentário
                </p>
                <button
                  onClick={() => {
                    makeCommentResposta(resposta.id);
                  }}
                  className="btn"
                >
                  Enviar
                </button>
              </div>
            </div>
          );
        })}
        <div
          className={
            data?.postStatus == "ABERTO" ? "editor" : "editor deactive"
          }
        >
          <TinyMCEEditor setEditorContent={setEditorResposta} />
          <Button event={makeResposta} title="Enviar" />
        </div>
      </div>
    </StyledSinglePost>
  );
};

export default SinglePost;
