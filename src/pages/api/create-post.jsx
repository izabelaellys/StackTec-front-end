import axios from 'axios'

export default async function createPostAPI(req, res) {
  const url = 'http://localhost:8080/api/post/v1.1/create';
  const currentDate = new Date();
  const formattedDate = currentDate.toISOString().slice(0, -1);

  const {MyCookie, autorId, postEditor, tags, titulo } = req.body

  const data = {
    atualizadoEm: formattedDate,
    autorId: autorId,
    criadoEm: formattedDate,
    descricao: postEditor,
    disciplinaId: 1,
    id: 0,
    tags: tags,
    titulo: titulo
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
