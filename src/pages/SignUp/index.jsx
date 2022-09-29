import { Link } from "react-router-dom";
import { Input } from "../../components/Input"; 
import { Button } from "../../components/Button";

import { Container, Background, Form } from "./styles";
import { FiLock, FiMail, FiUser } from 'react-icons/fi';

export function SignUp() {
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
        />

        <Input 
          icon={FiMail}
          placeholder="E-mail"
          type="text"
        />

        <Input 
          icon={FiLock}
          placeholder="Senha"
          type="password"
        />

        <Button 
          title="Cadastrar"
          type="submit"
        />

        <Link to="/signin">Voltar para o login</Link>
      </Form>
    </Container>
  )
}