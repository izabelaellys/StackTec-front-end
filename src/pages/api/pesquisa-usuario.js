import axios from 'axios'

export default async function pesquisaUsuarioAPI(req, res){
  const {MyCookie, search, page, itemsByPage } = req.body
  const url = 'http://localhost:8080/auth/v1.1/' + page + '/' + itemsByPage + '/' + search;

  console.log(url)

  const headers = {
    'Content-Type': 'application/json',
    Cookie: MyCookie,
  };

  try {
    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(200).json(error);
  }
}