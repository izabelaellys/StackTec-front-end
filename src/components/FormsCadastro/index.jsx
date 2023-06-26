import { StyledFormsCadastro } from "./styles";

import { useEffect, useState } from "react";
import Button from "../Button";
import { StyledFormsLogin } from "./styles";
import axios from "axios";
import { useRouter } from "next/router";

import cookie from "js-cookie";

const FormsCadastro = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [name, setName] = useState();
  const [nickname, setNickname] = useState();
  const [semestre, setSemestre] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [errorForms, setErrorForms] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (cookie.get("myCookie")) {
      router.push("/");
    }
  }, []);

  useEffect(() => {
    setTimeout(setErrorForms, 10000)
  }, [errorForms])

  const makeCadastro = async (e) => {
    e.preventDefault();

    if(confirmPassword != password){
      setErrorForms(1)
      return
    }

    if(!email.endsWith('@fatec.sp.gov.br')){
      setErrorForms(2)
      return
    }

    if(!email || !password || !name || !nickname || !semestre || !confirmPassword){
      setErrorForms(3)
      return
    }

    try {
      const url = "http://localhost:8080/auth/signup";
      const headers = {
        accept: "application/json",
        "Content-Type": "application/json",
        Cookie: "JSESSIONID=F4C6C38F7008C9F64C755ACE41D71C0C",
      };

      const data = {
        apelido: nickname,
        email: email,
        name: name,
        password: password,
        roles: ["ROLE_ALUNO"],
        semestre: semestre,
      };

      const response = await axios.post(url, data, { headers });
      
      cookie.set('myCookie', response.data.cookie)
      cookie.set('name', response.data.nome)
      cookie.set('id', response.data.id)
      cookie.set('email', response.data.email)
      cookie.set('roles', response.data.roles[0])

      setTimeout(router.push("/"), 1000)

    } catch (error) {
      if(error?.response?.data?.message == "Error: Email is already in use!"){
        setErrorForms(5)
        return
      }
      setErrorForms(4)
    }
  };

  return (
    <StyledFormsCadastro onSubmit={(e) => makeCadastro(e)}>
      <div className="formscontainer">
        <img src="logo.png" className="logo" alt="Logo StackTec" />
        <form method="POST" id="formLogin">
          <div className="form-group">
            <label for="apelido">Apelido</label>
            <input
              type="text"
              id="apelido"
              name="apelido"
              value={nickname}
              onChange={(e) => setNickname(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label for="name">Nome Completo</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <label for="email">E-mail</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Digite seu e-mail aqui"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="semestre">Semestre</label>
            <select
              id="semestre"
              name="semestre"
              value={semestre}
              onChange={(e) => setSemestre(e.target.value)}
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
          </div>

          <div className="form-group">
            <label for="password">Senha</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Digite sua senha aqui"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label for="confirm-password">Confirmar senha</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              minlength="6"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <p class={errorForms == 1 ? "forms-error active" : "forms-error"}>
            As duas senhas precisam ser iguais
          </p>
          <p class={errorForms == 2 ? "forms-error active" : "forms-error"}>
            O Email precisa ser do domínio '@fatec.sp.gov.br'
          </p>
          <p class={errorForms == 3 ? "forms-error active" : "forms-error"}>
            Todos os campos precisão estar preenchidos
          </p>
          <p class={errorForms == 4 ? "forms-error active" : "forms-error"}>
            Desculpa, mas houve algum erro durante a execução do cadastro
          </p>
          <p class={errorForms == 5 ? "forms-error active" : "forms-error"}>
            O Email já está em uso
          </p>

          <Button link="/cadastro" title="Cadastre-se" event={makeCadastro} />
        </form>
      </div>
    </StyledFormsCadastro>
  );
};

export default FormsCadastro;
