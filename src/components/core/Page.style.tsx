import styled, { css } from 'styled-components';

export const Page = styled.article<{
  center?: boolean;
}>`
  ${({ theme, center }) => css`
    padding: ${theme.spacing(6)} ${theme.spacing(4)};
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
    ${center &&
    css`
      height: 100%;
      flex-grow: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  `}
`;

export const Title = styled.h1<{
  isMargin?: boolean;
}>`
  font-size: 36px;
  font-weight: 700;
  ${({ isMargin, theme }) => isMargin &&
    css`
      margin-bottom: ${theme.spacing(2)};
    `}
`;

export const NotFoundMessage = styled.p`
  ${({ theme }) => css`
    color: ${theme.pallets.text[600].string()};
    font-size: 24px;
    font-weight: 600;
  `}
`;
