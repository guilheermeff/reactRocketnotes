import { Container } from "./styles";

export function TextArea({ value, ...rest }) {
  return(
    <Container>
      <textarea {...rest}>
        {value}
      </textarea>
    </Container>
  )
}
