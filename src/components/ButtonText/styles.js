import styled from 'styled-components';

export const Container = styled.button`
  border: 0;
  background: none;

  font-size: 16px;

  line-height: 21px;

  width: fit-content;

  color: ${({ theme, isActive }) => isActive ? theme.COLORS.ORANGE : theme.COLORS.GRAY_100};
`;