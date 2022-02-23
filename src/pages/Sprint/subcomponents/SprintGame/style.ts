import styled, { css } from 'styled-components';

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 800px;
    width: 100%;
    margin: 0 auto;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: ${theme.spacing(8)};
    padding: ${theme.spacing(3)};
  `}
`;

export const Buttons = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(min(200px, 100%), 1fr));
    gap: ${theme.spacing(2)};
  `}
`;
