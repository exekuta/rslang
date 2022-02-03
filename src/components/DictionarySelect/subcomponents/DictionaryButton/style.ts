import { DictionaryName } from 'src/types/Dictionary.type';
import styled, { css } from 'styled-components';

export const Button = styled.button<{
  isSelected: boolean;
  dictionaryName: DictionaryName;
  onClick: () => void;
}>`
  ${({ theme, dictionaryName, isSelected }) => {
    const pallet = theme.pallets.dictionaries[dictionaryName];
    return css`
      height: 55px;
      width: 55px;
      box-shadow: 0 0 0 2px inset ${theme.pallets.inactive[200].string()};
      border-radius: 50%;
      color: ${pallet[500].string()};
      background-color: white;
      display: grid;
      place-items: center;
      font-size: 24px;
      transition: background-color 200ms ease, border-radius 100ms ease;;
      ${isSelected && css`
        color: white;
        background-color: ${pallet[500].string()};
        border-radius: 15px;
        box-shadow: none;
      `}
    `;
  }}
`;
