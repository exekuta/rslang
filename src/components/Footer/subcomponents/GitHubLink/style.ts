import styled, { css } from 'styled-components';

export const Link = styled.a`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.spacing(1)};
  `}
`;

export const Icon = styled.span`
  font-size: 24px;
  display: grid;
  place-items: center;
`;

export const Username = styled.span`
  font-size: 18px;
  font-weight: 600;
`;
