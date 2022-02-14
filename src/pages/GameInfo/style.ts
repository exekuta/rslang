import styled, { css } from 'styled-components';

export const Image = styled.img`
  ${({ theme }) => css`
    display: block;
    object-fit: contain;
    width: min(100%, 220px);
    aspect-ratio: 1;
  `}
`;

export const InfoPart = styled.div`
  max-width: 600px;
`;

export const Title = styled.p`
  ${({ theme }) => css`
    color: ${theme.pallets.text[300].string()};
    font-size: 28px;
    font-weight: 700;
    text-align: center;
  `}
`;

export const Description = styled.p`
  ${({ theme }) => css`
    color: ${theme.pallets.text[500].string()};
    font-weight: 500;
    font-size: 20px;
    text-align: center;
  `}
`;
