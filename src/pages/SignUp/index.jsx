import { Link } from "react-router-dom";
import { Input } from "../../components/Input"; 
import { useState } from "react";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { Container, Background, Form } from "./styles";
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

export function SignUp() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleSignUp() {
    if(!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
    .then(() => {
      alert("Usuário cadastrado com sucesso!");
    })
    .catch(error => {
      if(error.ersponse) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível cadastrar!")
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
          onClick={handleSignUp}
        />

        <Link to="/">Voltar para o login</Link>
      </Form>
    </Container>
  )
}