import styled, { css } from 'styled-components';

export const Wrapper = styled.header`
  ${({ theme }) => css`
    padding: ${theme.spacing(3)};
    background-color: white;
  `}
`;
