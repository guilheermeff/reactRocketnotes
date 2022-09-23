import { RiShutDownLine } from 'react-icons/ri';
import { Container, Profile, Logout } from "./styles";


export function Header() {
  return (
    <Container>
      <Profile>
        <img src="https://github.com/guilheermeff.png" alt="foto do usuário"/>

        <div>
          <span>Bem-vindo</span>
          <strong>Guilherme Fernandes</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine/>
      </Logout>
    </Container>
  )
}