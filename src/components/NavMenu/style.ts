import styled, { css } from 'styled-components';

export const Menu = styled.nav`
  ${({ theme }) => css`
    height: 100%;
    width: 280px;
    display: grid;
    gap: ${theme.spacing(10)};
    align-content: space-between;
    background-color: white;
    grid-row: 1 / 3;
  `};
`;

export const Container = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacing(10)} ${theme.spacing(6)};
    display: grid;
    gap: ${theme.spacing(10)}
  `}
`;
