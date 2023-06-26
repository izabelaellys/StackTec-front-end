import axios from 'axios'

export default async function pesquisaPostsAPI(req, res){
  const {MyCookie, search } = req.body
  const url = 'http://localhost:8080/api/post/v1.1/search/' + search;

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