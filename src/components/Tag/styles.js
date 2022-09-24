import styled from 'styled-components';

export const Container = styled.span`
  padding: 5px 12px;
  margin-right: 6px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.COLORS.ORANGE};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  font-size: 12px;
  line-height: 14px;
  line-height: 100%;
`;