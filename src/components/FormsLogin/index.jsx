import { useState } from "react";
import Button from "../Button"
import { StyledFormsLogin } from "./styles"
import axios from "axios"

import cookie from 'js-cookie'

const FormsLogin = () => {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const makeLogin = async (e) => {
    e.preventDefault()

    // Convert form data to JSON object
    const jsonObject = {
      email: email,
      password: password
    }

    const headers = {
      "Content-Type": "application/json",
    };

    axios
      .post("http://localhost:8080/auth/signin", JSON.stringify(jsonObject), {
        headers,
      })
      .then((response) => response.data)
      .then((result) => {
        // Salva os dados em cookies
        cookie.set('myCookie', result.cookie)
        cookie.set('name', result.nome)
        cookie.set('email', result.email)
        cookie.set('roles', result.roles[0])

        // Redireciona para a página incial
        // window.location.href = "/"
      })
      .catch((error) => console.log("error", error))
  }

  return (
    <StyledFormsLogin>
      <div className="formscontainer">
        <img src="logo.png" className="logo" alt="Logo StackTec" />
        <form method="POST" id="formLogin">
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
          <a href="/redefinicao-senha">Esqueceu sua senha?</a>
          <input onClick={(e) => makeLogin(e)} type="submit" value="Entrar" className="btn" />
        </form>
        <p> Ainda não possui conta?</p>
        <Button link="/cadastro" title="Cadastre-se" />
      </div>
    </StyledFormsLogin>
  );
};

export default FormsLogin;
