import axios from 'axios'

export default async function pesquisaTagAPI(req, res){
  const {MyCookie, search } = req.body
  const url = 'http://localhost:8080/api/tag/v1.1/name/' + search;

  const headers = {
    'Content-Type': 'application/json',
    Cookie: MyCookie,
  };

  try {
    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(200).json(response.data);
  }
}