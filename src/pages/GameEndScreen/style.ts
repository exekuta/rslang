import styled, { css } from 'styled-components';

export const Image = styled.img`
  height: 250px;
  width: 250px;
  display: block;
  object-fit: contain;
`;

export const DetailsTitle = styled.p`
  ${({ theme }) => css`
    font-size: 32px;
    font-weight: 700;
    color: ${theme.pallets.text[200].string()};
  `}
`;
