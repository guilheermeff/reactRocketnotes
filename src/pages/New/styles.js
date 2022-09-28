import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas: 
    "header"
    "content"
  ;

  .tags {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }

  > main {
    grid-area: "content";
    overflow-y: auto;
  }
`;

export const Form = styled.form`
  margin: 64px auto;

  max-width: 550px;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 38px 0;

    h1 {
      font-size: 36px;
    }

    a {
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      font-size: 20px;
    }
  }
`;