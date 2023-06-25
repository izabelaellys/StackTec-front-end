import axios from 'axios';

export default async function createVoteAPI(req, res) {
  const { MyCookie, postId} = req.body;

  const url = 'http://localhost:8080/api/post/v1.1/voto/' + postId;

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