import axios from 'axios';

export default async function aceitaRespostaAPI(req, res) {
  const { MyCookie, tagId} = req.body;

  const url = 'http://localhost:8080/api/resposta/v1.1/aceitar/' + tagId;

  const headers = {
    Cookie: MyCookie,
  };

  try {
    const response = await axios.put(url, null, { headers });

    res.status(200).json(response.data);
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ error: 'An error occurred' });
  }
}