import styled, { css } from 'styled-components';

export const Number = styled.p`
  ${({ theme }) => css`
    font-size: 100px;
    color: ${theme.pallets.text[200].string()};
    line-height: 1em;
    font-weight: 700;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    font-size: 24px;
    font-weight: 600;
    color: ${theme.pallets.text[500].string()};
  `}
`;
