import { Container, Links, Content } from './styles.js';
import { Header } from '../../components/Header/index.jsx';
import { ButtonText } from '../../components/ButtonText/index.jsx';
import { Section } from '../../components/Section/index.jsx';
import { Tag } from '../../components/Tag/index.jsx';
import { Button } from '../../components/Button/index.jsx';

export function Details() {

  return (
    <Container>
      <Header/>

      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <Section title="Links Úteis">
            <Links>
              <li><a href="#">https://app.rocketseat.com.br/users</a></li>
              <li><a href="#">https://app.rocketseat.com.br/users</a></li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="nodejs" />
          </Section>

          <Button title="Voltar" />

        </Content>
      </main>
    </Container>
  )
}
