import axios from 'axios'

export default async function createCommentAPI(req, res) {
  const url = 'http://localhost:8080/api/comentario/v1.1/create';

  const { MyCookie, autorId, postId, comentarioEditor, comentarioResposta, respostaId } = req.body

  const data = {
    autor: autorId,
    id: 0,
    postId: postId || null,
    respostaId: respostaId,
    texto: comentarioEditor || comentarioResposta
  };

  const headers = {
    'Content-Type': 'application/json',
    Cookie: MyCookie,
  };

  try {
    const response = await axios.post(url, data, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(200).json(response.data);
  }
}
