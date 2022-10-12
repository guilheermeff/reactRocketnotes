import { Link, useState } from "react-router-dom";
import { Input } from "../../components/Input"; 
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Background, Form } from "./styles";
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const api = useState();

  function handleSignUp() {
    if(!user || !email || !password) {
      return alert("Preencha os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Usuário cadastrado com sucesso!");
        navigate("/");
      }).catch(error => {
        if(error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar!");
        }
      })
  }

  return(
    <Container>

      <Background />

      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar e salvar seus links úteis.</p>

        <h2>Crie sua conta</h2>

        <Input 
          icon={FiUser}
          placeholder="Nome"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input 
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input 
          icon={FiLock}
          placeholder="Senha"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button 
          title="Cadastrar"
          type="submit"
          onclick={handleSignUp}
        />

        <Link to="/signin">Voltar para o login</Link>
      </Form>
    </Container>
  )
}