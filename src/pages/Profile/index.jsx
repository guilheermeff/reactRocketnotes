import { FiArrowLeft, FiUser, FiMail, FiLock } from 'react-icons/fi';
import { Container, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return(
    <Container>

      <header>
        <FiArrowLeft />
      </header>

      <Form>
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
          placeholder="Senha atual"
          type="password"
        />

        <Input
          icon={FiLock}
          placeholder="Nova senha"
          type="password"
        />

        <Button title="Salvar"/>
      </Form>
    </Container>
  )
}