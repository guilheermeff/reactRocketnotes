import { Container } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Button } from '../../components/Button/index.jsx';

export function Details() {

  return (
    <Container>
      <Header/>

      <Section title="links úteis">
        <ul>
          <li>Ítem 1</li>
          <li>Ítem 2</li>
          <li>Ítem 3</li>
        </ul>
      </Section>

      <Button title="Voltar"/>
    </Container>
  )
}
