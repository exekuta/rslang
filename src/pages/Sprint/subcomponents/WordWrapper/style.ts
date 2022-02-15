/* eslint-disable indent */
import { SchemaName } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';

export const Word = styled.span`
  transition: color 200ms ease;
  font-size: 32px;
  font-weight: 800;
`;

export const Translation = styled.span`
  transition: color 200ms ease;
  font-size: 20px;
  font-weight: 500;
`;

export const Wrapper = styled.div<{
  isIncorrect: boolean;
  isCorrect: boolean;
}>`
  ${({ theme, isCorrect, isIncorrect }) => {
    const palletName: SchemaName = isCorrect
      ? SchemaName.SUCCESS
      : isIncorrect
      ? SchemaName.ERROR
      : SchemaName.PRIMARY;

    const pallet = theme.pallets[palletName];

    return css`
      padding: ${theme.spacing(3)};
      flex-grow: 1;
      max-height: 400px;
      width: 100%;
      border-radius: 5px;
      background-color: ${pallet[100].string()};
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      position: relative;
      transition: background-color 200ms ease;
      overflow: hidden;

      ${Word} {
        color: ${pallet[800].string()};
      }
      ${Translation} {
        color: ${pallet[700].string()};
      }
    `;
  }}
`;
