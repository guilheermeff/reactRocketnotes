import { useState } from 'react';

import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Container, Avatar, Form } from './styles';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { useAuth } from '../../hooks/auth';

export function Profile() {

  const { user, updateProfile } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState('');
  const [passwordNew, setPasswordNew] = useState('');

  function handleUpdate() {
    const user = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld
    }

    updateProfile({ user });
  }

  return(
    <Container>

      <header>
        <Link to="/home"><FiArrowLeft /></Link>
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
          value={name}
          onChange={e => setName(e.target.value)}
        />

        <Input
          icon={FiMail}
          placeholder="E-mail"
          type="text"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder="Senha atual"
          type="password"
          onChange={e => setPasswordOld(e.target.value)}
        />

        <Input
          icon={FiLock}
          placeholder="Nova senha"
          type="password"
          onChange={e => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  )
}