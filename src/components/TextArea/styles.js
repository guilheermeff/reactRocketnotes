import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  color: ${({ theme }) => theme.COLORS.GRAY_300};

  margin-bottom: 8px;
  border-radius: 10px;

  > textarea {
    width: 100%;
    height: 150px;
    padding: 20px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background-color: transparent;
    border: 0;

    font-size: 16px;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;