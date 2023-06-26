import axios from "axios";

export default async function updateUserAPI(req, res) {
  const {
    MyCookie,
    userId,
    formEmail,
    formPassword,
    formName,
    formNickname,
    formSemestre,
  } = req.body;

  const url = "http://localhost:8080/auth/v1.1/" + userId;

  const headers = {
    Cookie: MyCookie,
  };

  const data = {
    apelido: formNickname,
    email: formEmail,
    name: formName,
    password: formPassword,
    roles: ["ROLE_ADMIN"],
    semestre: formSemestre,
  };

  try {
    const response = await axios.put(url, data, { headers });

    res.status(200).json(response.data);
  } catch (error) {
    console.log("error", error);
    res.status(500).json({ error: "An error occurred" });
  }
}
