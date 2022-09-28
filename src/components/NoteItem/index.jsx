import { Container} from "./styles";
import { FiPlus, FiX } from 'react-icons';

export function NoteItem({ isNew, value, onClick, ...rest}) {
  return(
    <Container isNew={isNew}>
      <input 
        type="text"
        // CONTINUAR DAQUI 28/09!!
      />

      <button />
    </Container>
  )
}