import { StyledEditeUserByAdmin } from "./styles";

import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const EditeUserByAdmin = () => {
  const [userId, setUserId] = useState()
  const [userEmail, setUserEmail] = useState()
  const [userApelido, setUserApelido] = useState()
  const [userNome, setUserNome ] = useState()
  const [userLevel, setUserLevel] = useState()
  const [userSemestre, setUserSemestre] = useState()
  const [userPassword, setUserPassword] = useState()
  const [userConfirmPassword, setUserConfirmPassword] = useState()
  const [MyCookie, setMyCookie] = useState()
  const [errorForms, setErrorForms] = useState(0)
  const router = useRouter()

  useEffect(() => {
    setUserId(cookie.get('userId'))
    setUserEmail(cookie.get('userEmail'))
    setUserApelido(cookie.get('userApelido'))
    setMyCookie(cookie.get("myCookie"))
  }, [])

  const editeUser = async (e) => {
    e.preventDefault();

    if (userConfirmPassword != userPassword) {
      setErrorForms(1);
      return;
    }

    if (!userEmail.endsWith("@fatec.sp.gov.br")) {
      setErrorForms(2);
      return;
    }

    if (
      !userEmail ||
      !userPassword ||
      !userNome ||
      !userApelido ||
      !userSemestre ||
      !userConfirmPassword
    ) {
      setErrorForms(3);
      return;
    }

    try {
      const response = await axios.post("/api/update-user", {
        MyCookie,
        userId,
        formEmail: userEmail,
        formPassword: userPassword,
        formName: userNome,
        formNickname: userApelido,
        formSemestre: userSemestre,
        level: userLevel
      });

    } catch (error) {
      console.log(error);
    }
  };


  return (
    <StyledEditeUserByAdmin>
      <div class="form-head">
        <p>Atualizar dados do usuário</p>
        <img src="guaxinim.png" alt="Guaxinim" width="121px" height="48px" />
      </div>
      <form id="alteracao-dados-form" method="POST" onSubmit={(e) => editeUser(e)}>
        
      <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              required
            />

        <label for="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={userNome}
          onChange={(e) => setUserNome(e.target.value)}
          required
        />

        <label for="apelido">Apelido</label>
        <input
          type="text"
          id="apelido"
          name="apelido"
          value={userApelido}
          onChange={(e) => setUserApelido(e.target.value)}
          required
        />

          <label for="role">Nível de acesso</label>
            <select
              id="role"
              name="role"
              value={userLevel}
              onChange={(e) => setUserLevel(e.target.value)}
            >
              <option value="" disabled selected>
                Selecione o nível de privilégio
              </option>
              <option value="ROLE_ADMIN">Administrador</option>
              <option value="ROLE_ALUNO">Aluno</option>
            </select>

        <label for="semestre">Semestre</label>
        <select
          id="semestre"
          name="semestre"
          value={userSemestre}
          onChange={(e) => setUserSemestre(e.target.value)}
          required
        >
          <option value="" disabled selected>
            Selecione um semestre
          </option>
          <option value="SEM_1">1º semestre</option>
          <option value="SEM_2">2º semestre</option>
          <option value="SEM_3">3º semestre</option>
          <option value="SEM_4">4º semestre</option>
          <option value="SEM_5">5º semestre</option>
          <option value="SEM_6">6º semestre</option>
          <option value="SEM_7">7º semestre</option>
          <option value="SEM_8">8º semestre</option>
        </select>

        <label for="password">Senha</label>
        <input
          type="password"
          id="password"
          name="password"
          minlength="6"
          value={userPassword}
          onChange={(e) => setUserPassword(e.target.value)}
          required
        />

        <label for="confirm-password">Confirmar senha</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          minlength="6"
          value={userConfirmPassword}
          onChange={(e) => setUserConfirmPassword(e.target.value)}
          required
        />

        <p className={errorForms == 1 ? "forms-error active" : "forms-error"}>
          As duas senhas precisam ser iguais
        </p>
        <p className={errorForms == 2 ? "forms-error active" : "forms-error"}>
          O Email precisa ser do domínio '@fatec.sp.gov.br'
        </p>
        <p className={errorForms == 3 ? "forms-error active" : "forms-error"}>
          Todos os campos precisão estar preenchidos
        </p>
        <p className={errorForms == 4 ? "forms-error active" : "forms-error"}>
          Desculpa, mas houve algum erro durante a execução do cadastro
        </p>
        <p className={errorForms == 5 ? "forms-error active" : "forms-error"}>
          O Email já está em uso
        </p>

        <input onClick={(e) => editeUser(e)} type="submit" value="Atualizar" class="btn" />
      </form>
    </StyledEditeUserByAdmin>
  )
}

export default EditeUserByAdmin