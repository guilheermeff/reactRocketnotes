import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    "header"
    "content";

  > main {
    grid-area: content;
    overflow-y: scroll;

    padding: 64px 0;
  }
`;

export const Links = styled.ul`
  list-style: none;

  > li {
    margin-bottom: 12px;

    a {
      color: ${({ theme }) => theme.COLORS.WHITE};

      font-weight: 400;

      font-size: 16px;
      line-height: 19px;
      line-height: 100%;
    }
  }
`;

export const Content = styled.div`
  max-width: 550px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;

  > button:first-child {
    align-self: end;
  }

  > h1 {
    font-size: 36px;
    line-height: 47px;
    font-weight: 500;
    
    margin: 64px 0 16px;
  }

  > p {
    font-size: 16px;
    line-height: 19px;

    text-align: justify;
  }
`;