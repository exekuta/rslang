import styled, { css } from 'styled-components';

export const Logo = styled.p`
  ${({ theme }) => css`
    display: flex;
    gap: ${theme.spacing(2)};
    align-items: center;
    font-size: 28px;
    user-select: none;
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    font-weight: 700;
    color: ${theme.pallets.text[200].string()};
  `}
`;

export const Image = styled.img`
  height: 1em;
  width: 1em;
  object-fit: contain;
`;
