import { useEffect, useState } from "react";
import { StyledEditorCard } from "./styles";
import TinyMCEEditor from "../TinyMCEEditor/TinyMCEEditor";
import Button from "../Button";
import cookie from "js-cookie";
import axios from 'axios';
import Modal from "../Modal";

const EditorCard = () => {
  const [MyCookie, setMyCookie] = useState()
  const [autorId, setAutorId] = useState();
  const [titulo, setTitulo] = useState()
  const [postEditor, setPostEditor] = useState();
  const [tags, setTags] = useState();
  const [errorMsg, setErrorMsg ] = useState(0);
  const [postId, setPostId] = useState()

  useEffect(() => {
    setAutorId(cookie?.get("id"));
    setMyCookie(cookie?.get("myCookie"))
  }, [cookie?.get("id"), cookie?.get("myCookie")]);

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg(0)
    }, 10000)
  }, [errorMsg])

  const makePost = async () => {
    if(!postEditor){
      setErrorMsg(2)
      return
    }

    try {
      const response = await axios.post("/api/create-post", {
        MyCookie,
        autorId,
        postEditor,
        tags,
        titulo
      });

      setErrorMsg(1)
      setPostId(response?.data?.id)
    } catch (error) {
      setErrorMsg(2)
      console.log(error);
    }
  }

  return (
    <StyledEditorCard>
      {errorMsg == 1 && <Modal message="Gostaria de ir para o post que acabou de publicar?" isOpen={true} href={"/post/" + postId} titleButton="Ir para post" />}
      <h1>Crie seu post</h1>
      <div class="form-group">
        <h2>Título</h2>
        <p>
          Seja específico e imagine que você está fazendo uma pergunta para
          outra pessoa
        </p>
        <input type="text" name="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required/>
      </div>

      <div class="form-group">
        <h2>Descrição</h2>
        <p>
          Inclua todas as informações que alguém precisaria para responder à sua
          pergunta
        </p>
        <TinyMCEEditor setEditorContent={setPostEditor} />
      </div>

      <div class="form-group">
        <h2>Tag</h2>
        <p>Adicione até 5 tags para descrever sobre o que é sua pergunta</p>
        <p>Separe as tags desejadas por virgula</p>
        <input type="text" name="tags" onChange={(e) => tags?.length <= 5 || !tags ? setTags(e.target.value.split(',').map(tag => tag.trim())) : ''} required/>
        {tags?.length > 5 && <p className="alert error">O limite de tags que podem ser adicionados é 5, as últimas tags serão ignoradas</p>}
      </div>
      <p className={errorMsg == 2 ? 'alert error' : 'alert'}>Desculpe, mas não foi possível enviar o seu post</p>
      <p className={errorMsg == 1 ? 'alert sucess' : 'alert'}>Post enviado com sucesso</p>
      <Button event={makePost} title="Enviar Post"/>
    </StyledEditorCard>
  );
};

export default EditorCard;
