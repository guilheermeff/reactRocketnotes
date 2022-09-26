import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.BACKGROUND_800};

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 64px 160px;
  }
`;

export const Form = styled.form`
  max-width: 340px;

  margin: 52px auto;

  > div {

    svg {
      margin-left: 18px;
    }

    input {
      background-color: transparent;

      padding: 18px;
    } 
  }
`;