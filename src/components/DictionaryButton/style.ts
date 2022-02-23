import Color from 'color';
import { DictionaryName } from 'src/types/Dictionary.type';
import { IMDPallet } from 'src/types/Schema.type';
import styled, { css } from 'styled-components';

export const Button = styled.button<{
  dictionaryName: DictionaryName;
  isActive: boolean,
}>`
  ${({ theme, dictionaryName, isActive }) => {
    const pallet = theme.pallets.dictionaries[dictionaryName] as IMDPallet;

    return css`
      height: 75px;
      width: 75px;
      display: grid;
      place-items: center;
      font-size: 28px;
      background-color: ${theme.pallets.inactive[50].string()};
      border-radius: 15px;
      color: ${pallet[500].string()};
      transition: background-color 200ms ease, color 200ms ease;
      outline: none;
      ${!isActive &&
      css`
        box-shadow: 0 0 0 2px inset ${pallet[100].string()};
        &:not(:disabled) {
          &:hover {
            background-color: ${Color('white').mix(pallet[500], 0.15).string()};
          }
          &:active {
            background-color: ${Color('white').mix(pallet[500], 0.3).string()};
          }
          &:focus-visible {
            box-shadow: 0 0 0 2px inset ${pallet[200].string()},
              0 0 0 3px ${pallet[500].alpha(0.15).string()};
          }
        }
      `}
      ${isActive &&
      css`
        background-color: ${pallet[500].string()};
        color: ${theme.pallets.text[1000].string()};
      `}
    `;
  }}
`;
