import { Container, Profile } from "./styles";


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
    </Container>
  )
}