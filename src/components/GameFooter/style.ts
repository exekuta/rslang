/* eslint-disable indent */
import styled, { css } from 'styled-components';

export const Footer = styled.footer<{
  isCorrect?: boolean;
  isIncorrect?: boolean;
}>`
  ${({ theme, isCorrect, isIncorrect }) => {
    const pallet = isCorrect
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
        background-color: ${pallet[100].string()};
      `};
    `;
  }}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing(3)};
    justify-content: space-between;
    @media (max-width: 600px) {
    justify-content: center;
    }
  `}
`;
