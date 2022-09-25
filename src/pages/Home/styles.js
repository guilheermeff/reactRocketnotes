import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-columns: 250px auto;
  grid-template-rows: 105px 128px auto 64px;
  grid-template-areas: 
    "brand header"
    "menu search"
    "menu content"
    "newnote content";

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > h1 {
    font-size: 24px;
    line-height: 32px;
    font-weight: 700;

    color: ${({ theme }) => theme.COLORS.ORANGE};
  }
`;

export const Menu = styled.ul`
  grid-area: menu;

  list-style: none;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  flex-direction: column;
  align-items: center;
  
  gap: 24px;
  padding-top: 64px;
`;

export const Search = styled.div`
  grid-area: search;
  background-color: blue;
`;

export const Content = styled.div`
  grid-area: content;
  background-color: green;
`;

export const NewNote = styled.button`
  grid-area: newnote;

  border: 0;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  display: flex;
  align-items: center;
  justify-content: center;

  > svg {
    margin-right: 6px;
  }
`;
