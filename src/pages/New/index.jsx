import { Container, Form } from './styles';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { Section } from '../../components/Section';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

export function New() {
  return(
    <Container>
      
      <Header />
      
      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <a href="#">Voltar</a>
          </header>
          <Input placeholder="Título"/>
          
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://www.globo.com.br/" />
          </Section>

          <Button title="Salvar" />
        </Form>
        
      </main>
    </Container>
  )
}