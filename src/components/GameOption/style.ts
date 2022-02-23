/* eslint-disable indent */
import { IMDPallet } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';

export const Kbd = styled.kbd`
  ${({ theme }) => css`
    font-family: inherit;
    font-weight: 600;
    padding: 0 ${theme.spacing(1)};
    border-radius: 5px;
    min-width: 1.5em;
    text-align: center;
    font-size: 16px;
  `}
`;

export const Title = styled.span`
  ${({ theme }) => css`
    color: ${theme.pallets.text[300].string()};
    font-size: 20px;
  `}
`;

export const Button = styled.button<{
  isActive: boolean;
  isCorrect: boolean;
  isIncorrect: boolean;
  isHoverable: boolean;
}>`
  ${({
 theme, isActive, isCorrect, isIncorrect, isHoverable,
}) => {
    const palletName = isActive
      ? 'primary'
      : isCorrect
      ? 'success'
      : isIncorrect
      ? 'error'
      : 'inactive';
    const pallet = theme.pallets[palletName] as IMDPallet;

    return css`
      display: flex;
      gap: ${theme.spacing(2)};
      align-items: center;
      padding: ${theme.spacing(3)};
      border-radius: 10px;
      border: 2px solid ${pallet[400].string()};
      transition: background-color 200ms ease;
      background-color: ${pallet[100].string()};
      ${!isActive &&
      isHoverable &&
      css`
        &:hover {
          background-color: ${pallet[200].string()};
        }
        &:active {
          background-color: ${pallet[300].string()};
        }
      `}
      ${Kbd} {
        color: ${pallet[400].string()};
        border: 2px solid ${pallet[400].string()};
      }
    `;
  }}
`;
