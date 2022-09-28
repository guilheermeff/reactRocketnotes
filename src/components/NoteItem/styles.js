import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BACKGROUND_900};
  color: ${({ theme }) => theme.GRAY_300};

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 8px;
  border-radius: 10px;
  padding-right: 16px;

  > button {
    border: 0;
    background: none;

    svg {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.ORANGE : theme.COLORS.RED};
      font-size: 24px;
    }
  }

  > input {
    height: 56px;
    width: 100%;

    font-size: 16px;

    padding: 12px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;