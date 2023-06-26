import axios from "axios";

export default async function listUserAPI(req, res){
  const {MyCookie, page, itemsByPage} = req.body
  const url = 'http://localhost:8080/auth/v1.1/all/' + page + '/' + itemsByPage;

  const headers = {
    'Content-Type': 'application/json',
    Cookie: MyCookie,
  };

  try {
    const response = await axios.get(url, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json(error);
  }
}