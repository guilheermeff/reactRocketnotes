import { Container } from './styles.js';
import { Button } from '../../components/Button/index.jsx';

export function Details() {

  return (
    <Container>
      <h1>Hello World!</h1>
      <span>Guilherme Feitosa Fernandes</span>

      <Button title="Abrir" loading/>
      <Button title="Cadastrar" loading/>
      <Button title="Cancelar" loading/>
      <Button title="Voltar" loading/>
    </Container>
  )
}
