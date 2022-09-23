import { Container } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Section, Children } from '../../components/Section/index.jsx';
import { Button } from '../../components/Button/index.jsx';

export function Details() {

  return (
    <Container>
      <Header/>

      <Section title="links úteis">
        <ul>
          <li><a href="#"></a></li>
          <li><a href="#"></a></li>

          // CONTINUAR AQUI!!
        </ul>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}
