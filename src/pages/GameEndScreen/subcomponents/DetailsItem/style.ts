import styled, { css } from 'styled-components';

export const Wrapper = styled.p`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(1)}
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.pallets.text[500].string()};
    font-weight: 500;
    font-size: 20px;
  `}
`;

export const Value = styled.span`
  ${({ theme }) => css`
    color: ${theme.pallets.primary[500].string()};
    font-weight: 500;
    font-size: 20px;
  `}
`;
