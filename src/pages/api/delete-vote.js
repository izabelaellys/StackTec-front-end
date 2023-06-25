import axios from 'axios';

export default async function deleteVoteAPI(req, res) {
  const { MyCookie, postId} = req.body;

  const url = 'http://localhost:8080/api/post/v1.1/removeVoto/' + postId;

  const headers = {
    Cookie: MyCookie,
  };

  try {
    const response = await axios.delete(url, { headers });

    console.log(response)
    res.status(200).send(response.data);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
}