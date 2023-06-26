import axios from "axios";

export default async function pesquisaPostPorTagsAPI(req, res){
  const {MyCookie, page, itemsByPage, dataTags, orderBy } = req.body
  const url = 'http://localhost:8080/api/post/v1.1/getPageableByTags/' + page + '/' + itemsByPage;

  const headers = {
    'Content-Type': 'application/json',
    Cookie: MyCookie,
  };

  console.log(dataTags)

  const data = {
    "ordens": [ orderBy ], 
    "tags": dataTags
  }

  try {
    const response = await axios.post(url, data, { headers });
    res.status(200).json(response.data);
  } catch (error) {
    res.status(200).json(error);
  }
}