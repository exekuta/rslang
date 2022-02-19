import styled, { css } from 'styled-components';

export const CardsWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
    gap: ${theme.spacing(2)}
  `}
`;
