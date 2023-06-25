import axios from 'axios';

export default async function createRespostaAPI(req, res){
  const url = 'http://localhost:8080/api/resposta/v1.1/create';
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, -1);

  const {MyCookie, autorId, postId, respostaEditor} = req.body

  const data = {
    aceita: false,
    atualizadoEm: formattedDate,
    autorId: autorId,
    comentarios: [],
    criadoEm: formattedDate,
    descricao: respostaEditor,
    id: 0,
    postId: postId,
    votos: 0
  }

  const headers = {
    'Content-Type': 'application/json',
    Cookie: MyCookie,
  };

  try {
    const response = await axios.post(url, data, { headers });

    console.log(response)
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
}