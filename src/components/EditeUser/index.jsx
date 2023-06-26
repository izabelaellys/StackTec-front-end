import { useEffect, useState } from "react";
import { StyledEditeUser } from "./styles";
import axios from "axios";
import { useRouter } from "next/router";
import cookie from "js-cookie";


const EditeUser = ({ email, name, editeLevel }) => {
  const [formEmail, setFormEmail] = useState();
  const [formName, setFormName] = useState();
  const [formNickname, setFormNickname] = useState();
  const [formLevel, setFormLevel] = useState("ROLE_ADMIN");
  const [formSemestre, setFormSemestre] = useState();
  const [formPassword, setFormPassword] = useState();
  const [formConfirmPassword, setFormConfirmPassword] = useState();
  const [errorForms, setErrorForms] = useState(0);
  const [MyCookie, setMyCookie] = useState()
  const [userId, setUserId] = useState()
  const router = useRouter();

  useEffect(() => {
    setFormEmail(email);
    setFormName(name);
  }, [email, name]);

  useEffect(() => {
    setMyCookie(cookie.get("myCookie"))
    setUserId(cookie.get("id"))
  }, [cookie.get("myCookie"), cookie.get("id"), cookie.get('roles')]);

  const editeUser = async (e) => {
    e.preventDefault();
    const level = editeLevel == 'admin' ? formLevel : "ROLE_ALUNO"

    if (formConfirmPassword != formPassword) {
      setErrorForms(1);
      return;
    }

    if (!formEmail.endsWith("@fatec.sp.gov.br")) {
      setErrorForms(2);
      return;
    }

    if (
      !formEmail ||
      !formPassword ||
      !formName ||
      !formNickname ||
      !formSemestre ||
      !formConfirmPassword
    ) {
      setErrorForms(3);
      return;
    }

    try {
      const response = await axios.post("/api/update-user", {
        MyCookie,
        userId,
        formEmail,
        formPassword,
        formName,
        formNickname,
        formSemestre,
        level: level
      });

      cookie.set('name', formName)
      cookie.set('email', formEmail)
      cookie.set('roles', formLevel)

      setTimeout(router.reload(window.location.pathname), 1000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <StyledEditeUser>
      <div class="form-head">
        <p>Atualizar dados do usuário</p>
        <img src="guaxinim.png" alt="Guaxinim" width="121px" height="48px" />
      </div>
      <form id="alteracao-dados-form" method="POST" onSubmit={(e) => editeUser(e)}>
        
        {editeLevel == 'admin' && (
          <>
            <label for="email">E-mail</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formEmail}
              onChange={(e) => setFormEmail(e.target.value)}
              required
            />
          </>
        )}

        <label for="name">Nome Completo</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
          required
        />

        <label for="apelido">Apelido</label>
        <input
          type="text"
          id="apelido"
          name="apelido"
          value={formNickname}
          onChange={(e) => setFormNickname(e.target.value)}
          required
        />

        {editeLevel == 'admin' && (
          <>
            <label for="role">Nível de acesso</label>
            <select
              id="role"
              name="role"
              value={formLevel}
              onChange={(e) => setFormLevel(e.target.value)}
            >
              <option value="" disabled selected>
                Selecione o nível de privilégio
              </option>
              <option value="ROLE_ADMIN">Administrador</option>
              <option value="ROLE_ALUNO">Aluno</option>
            </select>
          </>
        )}

        <label for="semestre">Semestre</label>
        <select
          id="semestre"
          name="semestre"
          value={formSemestre}
          onChange={(e) => setFormSemestre(e.target.value)}
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
          value={formPassword}
          onChange={(e) => setFormPassword(e.target.value)}
          required
        />

        <label for="confirm-password">Confirmar senha</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          minlength="6"
          value={formConfirmPassword}
          onChange={(e) => setFormConfirmPassword(e.target.value)}
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
    </StyledEditeUser>
  );
};

export default EditeUser;
