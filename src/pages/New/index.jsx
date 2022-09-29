import { Link } from 'react-router-dom';
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
            <Link to="/home">Voltar</Link>
          </header>
          <Input placeholder="Título"/>
          
          <TextArea placeholder="Observações"/>

          <Section title="Links úteis">
            <NoteItem value="https://www.globo.com.br/" />
            <NoteItem placeholder="Novo link" isNew />
          </Section>

          <Section title="Marcadores">
            <div className='tags'>
              <NoteItem value="React" />
              <NoteItem placeholder="Novo marcador" isNew />
            </div>
          </Section>

          <Button title="Salvar" />
        </Form>
        
      </main>
    </Container>
  )
}