import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Avatar, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function Profile() {
  return(
    <Container>

      <header>
        <FiArrowLeft />
      </header>

      <Form>

        <Avatar>
          <img src="https://github.com/guilheermeff.png" alt="Foto do usuário" />

          <label>
            <FiCamera />
            <input type="file" id="avatar" />
          </label>
        </Avatar>

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