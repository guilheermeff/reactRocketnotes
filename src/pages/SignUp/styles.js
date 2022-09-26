import styled from 'styled-components';
import backgroundImg from '../../assets/imgSignIn.png';

export const Container = styled.div`
  height: 100vh;


  display: flex;
  align-items: stretch;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding-inline: 140px;

  > h1 {
    font-size: 48px;
    color: ${({ theme }) => theme.COLORS.ORANGE};
  }

  > p {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > h2 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-block: 48px;
  }

  > div {
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    svg {
      margin-left: 18px;
    }

    input {
      background-color: transparent;

      padding: 18px;
    }    
  }

  > a {
    color: ${({ theme }) => theme.COLORS.ORANGE};
    margin-top: 124px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${backgroundImg}) no-repeat center center;

  background-size: cover;
`;