/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Footer = styled.footer<{
  isCorrect: boolean;
  isIncorrect: boolean;
}>`
  ${({ theme, isCorrect, isIncorrect }) => {
    const pallete = isCorrect
      ? theme.pallets.success
      : isIncorrect
      ? theme.pallets.error
      : theme.pallets.primary;
    return css`
      min-height: 120px;
      border-top: 2px solid ${theme.pallets.inactive[300].string()};
      display: flex;
      align-items: center;
      margin-top: auto;
      ${(isCorrect || isIncorrect) &&
      css`
        background-color: ${pallete[100].string()};
    `};
    `;
  }}
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
