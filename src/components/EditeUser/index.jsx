import { useEffect, useState } from "react"
import { StyledEditeUser } from "./styles"

const EditeUser = ({ email, name, editeLevel }) => {
  const [formEmail, setFormEmail] = useState()
  const [formName, setFormName] = useState()
  const [formNickname, setFormNickname] = useState()
  const [formLevel, setFormLevel] = useState()
  const [formSemestre, setFormSemestre] = useState()
  const [formPassword, setFormPassword] = useState()
  const [formConfirmPassword, setFormConfirmPassword] = useState()

  useEffect(() => {
    setFormEmail(email)
    setFormName(name)
  }, [email, name])

  return (
    <StyledEditeUser>
      <div class="form-head">
        <p>Atualizar dados do usuário</p>
        <img src="guaxinim.png" alt="Guaxinim" width="121px" height="48px" />
      </div>
      <form id="alteracao-dados-form" method="POST">
        <label for="email">E-mail</label>
        <input type="email" id="email" name="email" value={formEmail} onChange={(e) => setFormEmail(e.target.value)} required />

        <label for="name">Nome Completo</label>
        <input type="text" id="name" name="name" value={formName} onChange={(e) => setFormName(e.target.value)} required />

        <label for="apelido">Apelido</label>
        <input type="text" id="apelido" name="apelido" value={formNickname} onChange={(e) => setFormNickname(e.target.value)} required />

        {editeLevel && 
        <>
          <label for="role">Nível de acesso</label>
          <select id="role" name="role" value={formLevel} onChange={(e) => setFormLevel(e.target.value)} >
            <option value="" disabled selected>
              Selecione o nível de privilégio
            </option>
            <option value="ROLE_ADMIN">Administrador</option>
            <option value="ROLE_ALUNO">Aluno</option>
          </select>
        </>}

        <label for="semestre">Semestre</label>
        <select id="semestre" name="semestre" value={formSemestre} onChange={(e) => setFormSemestre(e.target.value)} required>
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
          value={formPassword} onChange={(e) => setFormPassword(e.target.value)}
          required
        />

        <label for="confirm-password">Confirmar senha</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          minlength="6"
          value={formConfirmPassword} onChange={(e) => setFormConfirmPassword(e.target.value)}
          required
        />

        <input type="submit" value="Atualizar" class="btn" />
      </form>
    </StyledEditeUser>
  );
};

export default EditeUser;
