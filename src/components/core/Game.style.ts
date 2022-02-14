import styled, { css } from 'styled-components';

export const Container = styled.div<{
  isMain?: boolean;
  center?: boolean;
}>`
  ${({ theme, isMain, center }) => css`
    width: 100%;
    max-width: 1000px;
    padding: ${theme.spacing(3)};
    margin: 0 auto;
    ${isMain &&
    css`
      flex-grow: 1;
    `}
    ${center &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    `}
  `}
`;

export const Page = styled.article`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
