import { Link } from 'react-router-dom';
import { Input } from "../../components/Input"; 
import { Button } from "../../components/Button";

import { useAuth } from '../../hooks/auth';

import { Container, Background, Form } from "./styles";
import { FiLock, FiMail } from 'react-icons/fi';

export function SignIn() {

  const data = useAuth();

  return(
    <Container>
      <Form>
        <h1>Rocket Notes</h1>
        <p>Aplicação para gerenciar e salvar seus links úteis.</p>

        <h2>Faça seu login</h2>

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
          title="Entrar"
          type="submit"
        />

        <Link to="/signup">Criar conta</Link>
      </Form>

      <Background />
    </Container>
  )
}