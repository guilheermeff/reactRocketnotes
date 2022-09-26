import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  background-color: ${({ theme }) => theme.BACKGROUND_800};

  > header {
    width: 100%;
    height: 144px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    padding: 64px 160px;

    svg {
      font-size: 16px;
      height: 16px;
    }
  }
`;