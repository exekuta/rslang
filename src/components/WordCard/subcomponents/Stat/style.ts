import styled, { css } from 'styled-components';

export const Stat = styled.p`
  ${({ theme }) => css`
    color: ${theme.pallets.inactive[500].string()};
    font-size: 18px;
  `}
`;

export const Title = styled.span`
  font-weight: 500;
`;

export const Value = styled.span`
  font-weight: 400;
`;
